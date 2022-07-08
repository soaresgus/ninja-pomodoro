import { TimerModeTabs } from "../TimerModeTabs";
import { Container, InputContainer, StyledInput, FormContainer, PopoverText, FormFooter, StyledButton } from "./styles";

import { MdHelp } from 'react-icons/md'
import { PopoverButton } from "../PopoverButton";
import { CheckboxWithLabel } from "../CheckboxWithLabel";

export function ConfigurationsForm() {
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
                <CheckboxWithLabel
                    id="block-rest"
                    labelText="Bloquear descanso"
                />
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
                        id="rest-time"
                        label="Tempo (minutos)"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            inputMode: 'numeric',
                            endAdornment: <label htmlFor="rest-time">min</label>,
                        }}
                    />
                </div>
            </InputContainer>

            <InputContainer>
                <CheckboxWithLabel
                    id="automatic-rest-time"
                    labelText="Tempo automático"
                />
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