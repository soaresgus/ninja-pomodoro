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

    const [actualTime, setActualTime] = useState(jobTime);


    let timeout: number | undefined;
    useEffect(() => {
        if (playing) {
            if (actualTime > 0) {
                timeout = setTimeout(() => setActualTime((state: number) => state - 1), 1000);
            } else {
                return;
            }
        } else {
            clearTimeout(timeout);
        }
    }, [actualTime, playing]);

    function pauseTimer() {
        setPlaying(false);
        clearTimeout(timeout);
    }

    function resetTimer(actualTimeValue: number) {
        pauseTimer();
        setActualTime(actualTimeValue);
    }

    return (
        <IconContext.Provider value={{ size: '28' }}>
            <Container>
                <TimerModeTabs
                    content={[
                        (
                            <TimeText>{formatSeconds(actualTime, true, true)}</TimeText>
                        ),
                        (
                            <TimeText>05:00</TimeText>
                        )
                    ]}
                    disabled={[false, (actualTime > 0 && blockRest)]}
                />
                <ControlersContainer>
                    <PlayPauseButton
                        onClick={() => {
                            setPlaying((state: boolean) => !state);
                            if (playing) {
                                clearTimeout(timeout);
                            }
                        }}
                    >
                        {
                            playing ? (<MdPause />) : (<MdPlayArrow />)
                        }
                    </PlayPauseButton>

                    <ResetButton
                        onClick={() => {
                            resetTimer(jobTime);
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
        </IconContext.Provider>
    )
}