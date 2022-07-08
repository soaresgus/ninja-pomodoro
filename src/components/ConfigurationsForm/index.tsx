import { HoverButtonTrigger } from "../PopoverButton/styles";
import * as HoverCard from '@radix-ui/react-hover-card';

import { TimerModeTabs } from "../TimerModeTabs";
import { Container, InputContainer, StyledInput, FormContainer, PopoverText, StyledCheckbox, FormFooter, StyledButton } from "./styles";

import { MdHelp } from 'react-icons/md'
import { PopoverButton } from "../PopoverButton";

export function ConfigurationsForm() {
    const HoverButton = HoverCard.Root;
    const jobForm = (
        <FormContainer>
            <InputContainer>
                <StyledInput
                    type="text"
                    id="job-time"
                    label="Tempo (minutos)"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        inputMode: 'numeric',
                        endAdornment: <label htmlFor="job-time">min</label>,
                    }}
                />
            </InputContainer>

            <InputContainer>
                <StyledInput
                    type="text"
                    id="qtd-pomodoro"
                    label="Qtd. Pomodoros"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        inputMode: 'numeric',
                        endAdornment: <label htmlFor="qtd-pomodoro">x</label>,
                    }}
                />
                <PopoverButton
                    icon={<MdHelp />}
                    paleteColor='light'
                >
                    <PopoverText>
                        Define o tempo automaticamente pela quantidade de pomodoros.
                        <p>[1x = 25 min]</p>
                    </PopoverText>
                </PopoverButton>
            </InputContainer>

            <InputContainer>
                <label htmlFor="block-rest">Bloquear descanso</label>
                <StyledCheckbox sx={{ '& .MuiSvgIcon-root': { fontWeight: 1 } }} id="block-rest" />
                <PopoverButton
                    icon={<MdHelp />}
                    paleteColor='light'
                >
                    <PopoverText>
                        Bloqueia o temporizador de descanso enquanto o de trabalho não encerra.
                    </PopoverText>
                </PopoverButton>
            </InputContainer>

            <FormFooter>
                <StyledButton
                    variant="outlined"
                    size="large"
                >
                    Aplicar
                </StyledButton>
            </FormFooter>
        </FormContainer >
    )

    const restForm = (
        <></>
    )

    return (
        <Container>
            <TimerModeTabs paleteColor="primary" content={[
                (jobForm),
                (restForm)
            ]} />
        </Container>
    )
}