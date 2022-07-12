import { ConfigurationsContainer, Container, ControlersContainer, PlayPauseButton, ResetButton, TimeText } from "./styles";

import { MdTune, MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md'
import { IconContext } from "react-icons";

import { PopoverButton } from "../PopoverButton";
import { ConfigurationsForm } from "../ConfigurationsForm";
import { TimerModeTabs } from "../TimerModeTabs";
import React, { useEffect, useState } from "react";
import usePersistedState from "../../utils/usePersistedState";

import { formatSeconds } from '../ConfigurationsForm';

export function Timer() {
    const [playing, setPlaying] = useState(false);

    const [jobTime, setJobTime] = usePersistedState('jobTime', 1500);
    const [restTime, setRestTime] = usePersistedState('restTime', 500);
    const [blockRest, setBlockRest] = usePersistedState('blockRest', true)

    const [globalTime, setGlobalTime] = useState(jobTime);
    const [actualJobTime, setActualJobTime] = useState(jobTime);
    const [actualRestTime, setActualRestTime] = useState(restTime);

    const [restMode, setRestMode] = useState(false);

    const defaultTitle = 'Ninja Pomodoro'

    let timeout: number | undefined;

    function pauseTimer() {
        setPlaying(false);
        clearTimeout(timeout);
    }

    useEffect(() => {
        if (!playing || globalTime < 0) {
            pauseTimer();
            document.title = defaultTitle;
            return;
        }

        timeout = setTimeout(() => {
            setGlobalTime((state: number) => state - 1)
        }, 1000);

        if (restMode) {
            document.title = `Descanso: ${formatSeconds(globalTime, true, true)}`
            setActualRestTime(globalTime)
        } else {
            document.title = `Trabalho: ${formatSeconds(globalTime, true, true)}`
            setActualJobTime(globalTime)
        }
    }, [playing, globalTime]);

    function resetTimer(actualTimeValue: number) {
        pauseTimer();
        setGlobalTime(actualTimeValue);
        setActualJobTime(jobTime);
        setActualRestTime(restTime);
    }

    return (
        <IconContext.Provider value={{ size: '28' }}>
            <Container>
                <TimerModeTabs
                    content={[
                        (
                            <TimeText>{formatSeconds(actualJobTime, true, true)}</TimeText>
                        ),
                        (
                            <TimeText>{formatSeconds(actualRestTime, true, true)}</TimeText>
                        )
                    ]}
                    disabled={[false, (actualJobTime > 0 && blockRest)]}
                    onClickActions={[
                        () => {
                            pauseTimer();
                            setGlobalTime(actualJobTime);
                            setRestMode(false);
                        },
                        () => {
                            pauseTimer();
                            setGlobalTime(actualRestTime);
                            setRestMode(true);
                        }
                    ]}
                />
                <ControlersContainer>
                    <PlayPauseButton
                        onClick={() => {
                            /* pauseTimer(); */
                            setPlaying(!playing);
                        }}
                    >
                        {
                            playing ? (<MdPause />) : (<MdPlayArrow />)
                        }
                    </PlayPauseButton>

                    <ResetButton
                        onClick={() => {
                            restMode ? resetTimer(restTime) : resetTimer(jobTime)
                        }}
                    >
                        <MdRefresh />
                    </ResetButton>
                </ControlersContainer>

                <ConfigurationsContainer>
                    <PopoverButton
                        icon={<MdTune />}
                        title='Configurações'
                    >
                        <ConfigurationsForm />
                    </PopoverButton>
                </ConfigurationsContainer>
            </Container>
        </IconContext.Provider >
    )
}