import { PopoverButton } from "../PopoverButton";
import { ConfigurationsContainer, Container, TimeText } from "./styles";

import { MdTune } from 'react-icons/md'

export function Timer() {
    return (
        <Container>
            <TimeText>25:00</TimeText>
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
    )
}