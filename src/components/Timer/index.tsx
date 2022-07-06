import { PopoverButton } from "../PopoverButton";
import { ConfigurationsContainer, Container, ControlersContainer, PlayPauseButton, ResetButton, TimeText } from "./styles";

import { MdTune, MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md'
import { IconContext } from "react-icons";

export function Timer() {
    return (
        <IconContext.Provider value={{ size: '28' }}>
            <Container>
                <TimeText>25:00</TimeText>

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
                        content={
                            <span>olá mundo!</span>
                        }
                    />
                </ConfigurationsContainer>
            </Container>
        </IconContext.Provider>
    )
}