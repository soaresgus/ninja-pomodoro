import { ConfigurationsContainer, Container, ControlersContainer, PlayPauseButton, ResetButton, TimeText } from "./styles";

import { MdTune, MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md'
import { IconContext } from "react-icons";

import { PopoverButton } from "../PopoverButton";
import { ConfigurationsForm } from "../ConfigurationsForm";
import { TimerModeTabs } from "../TimerModeTabs";

export function Timer() {
    return (
        <IconContext.Provider value={{ size: '28' }}>
            <Container>
                <TimerModeTabs content={[
                    (
                        <TimeText>25:00</TimeText>
                    ),
                    (
                        <TimeText>05:00</TimeText>
                    )
                ]} />
                <ControlersContainer>
                    <PlayPauseButton
                        onClick={() => { }}
                    >
                        <MdPlayArrow />
                    </PlayPauseButton>

                    <ResetButton>
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