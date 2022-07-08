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
                <div>
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
                </div>
            </InputContainer>

            <InputContainer>
                <div>
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
                </div>
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
                <div>
                    <label htmlFor="block-rest">Bloquear descanso</label>
                    <StyledCheckbox sx={{ '& .MuiSvgIcon-root': { fontWeight: 1 } }} id="block-rest" />
                </div>
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
        <FormContainer>
            <InputContainer>
                <div>
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
                </div>
            </InputContainer>

            <InputContainer>
                <div>
                    <label htmlFor="block-rest">Tempo automático</label>
                    <StyledCheckbox sx={{ '& .MuiSvgIcon-root': { fontWeight: 1 } }} id="block-rest" />
                </div>
                <PopoverButton
                    icon={<MdHelp />}
                    paleteColor='light'
                >
                    <PopoverText>
                        Define um tempo automático de acordo com a
                        quantidade de pomodoros citada nas configurações do modo de trabalho.
                        <p>[1 pomodoro = 5 min. descanso]</p>
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

    return (
        <Container>
            <TimerModeTabs paleteColor="primary" content={[
                (jobForm),
                (restForm)
            ]} />
        </Container>
    )
}