import { ConfigurationsContainer, Container, ControlersContainer, PlayPauseButton, ResetButton, TimeText } from "./styles";

import { MdTune, MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md'
import { IconContext } from "react-icons";

import { PopoverButton } from "../PopoverButton";
import { ConfigurationsForm } from "../ConfigurationsForm";
import { TimerModeTabs } from "../TimerModeTabs";

import usePersistedState from "../../utils/usePersistedState";
import { useTimer } from "../../utils/useTimer";

export function Timer() {
    const timer = useTimer();
    const [blockRest, setBlockRest] = usePersistedState('blockRest', true)

    return (
        <IconContext.Provider value={{ size: '28' }}>
            <Container>
                <TimerModeTabs
                    content={[
                        (
                            <TimeText>{timer.formatSeconds(timer.actualJobTime, true, true)}</TimeText>
                        ),
                        (
                            <TimeText>{timer.formatSeconds(timer.actualRestTime, true, true)}</TimeText>
                        )
                    ]}
                    disabled={[false, (timer.actualJobTime > 0 && blockRest)]}
                    onClickActions={[
                        () => {
                            timer.pauseTimer;
                            timer.setGlobalTime(timer.actualJobTime);
                            timer.setRestMode(false);
                        },
                        () => {
                            timer.pauseTimer;
                            timer.setGlobalTime(timer.actualRestTime);
                            timer.setRestMode(true);
                        }
                    ]}
                />
                <ControlersContainer>
                    <PlayPauseButton
                        onClick={() => {
                            timer.setPlaying(!timer.playing);
                        }}
                    >
                        {
                            timer.playing ? (<MdPause />) : (<MdPlayArrow />)
                        }
                    </PlayPauseButton>

                    <ResetButton
                        onClick={() => {
                            timer.restMode ? timer.resetTimer(timer.persistedRestTime) : timer.resetTimer(timer.persistedJobTime)
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