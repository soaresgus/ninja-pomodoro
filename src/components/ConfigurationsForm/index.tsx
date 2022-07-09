import { TimerModeTabs } from "../TimerModeTabs";
import { Container, InputContainer, StyledInput, FormContainer, PopoverText, FormFooter, StyledButton } from "./styles";

import { MdHelp } from 'react-icons/md'
import { PopoverButton } from "../PopoverButton";
import { CheckboxWithLabel } from "../CheckboxWithLabel";
import React, { useEffect, useState } from "react";

export function ConfigurationsForm() {
    const [validJobForm, setValidJobForm] = useState([false, false]);
    const [validRestForm, setValidRestForm] = useState([false]);

    const [jobFormInputValues, setJobFormInputValues] = useState([0, 0]);
    const [restFormInputValues, setRestFormInputValues] = useState([0]);

    function handleSetValidFormAccordingState(formState: boolean[], formStateDispatch: React.Dispatch<React.SetStateAction<boolean[]>>, value: boolean, index: 0 | 1) {
        let validFormValues: boolean[] = [];

        formState.forEach((element, key) => {
            validFormValues[key] = element;
            if (key == index) {
                validFormValues[key] = value;
            }
        });

        formStateDispatch(validFormValues);
    }

    function handleSetInputValuesAccordingState(formInputState: number[], formInputStateDispatch: React.Dispatch<React.SetStateAction<number[]>>, value: number, index: 0 | 1) {
        let FormValues: number[] = [];

        formInputState.forEach((element, key) => {
            FormValues[key] = element;
            if (key == index) {
                FormValues[key] = value;
            }
        });

        formInputStateDispatch(FormValues);
    }

    const formIsValid = (values: boolean[]) => {
        return values.every(element => element);
    }

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
                        onChange={(event) => {
                            event.target.value = formatValue(new RegExp(/\D/), event.target.value);
                            handleSetValidFormAccordingState(validJobForm, setValidJobForm, checkInputFormat(event.target.value), 0);
                            handleSetInputValuesAccordingState(jobFormInputValues, setJobFormInputValues, Number(event.target.value), 0);
                        }}
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
                        onChange={(event) => {
                            event.target.value = formatValue(new RegExp(/\D/), event.target.value);
                            handleSetValidFormAccordingState(validJobForm, setValidJobForm, checkInputFormat(event.target.value), 1);
                            handleSetInputValuesAccordingState(jobFormInputValues, setJobFormInputValues, Number(event.target.value), 1);
                        }}
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
                    disabled={!formIsValid(validJobForm)}
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
                        onChange={(event) => {
                            event.target.value = formatValue(new RegExp(/\D/), event.target.value);
                            handleSetValidFormAccordingState(validRestForm, setValidRestForm, checkInputFormat(event.target.value), 0);
                            handleSetInputValuesAccordingState(restFormInputValues, setRestFormInputValues, Number(event.target.value), 0);
                        }}
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
                    disabled={!formIsValid(validRestForm)}
                >
                    Aplicar
                </StyledButton>
            </FormFooter>
        </FormContainer >
    )

    function formatValue(pattern: RegExp, value: string) {
        return value.replace(pattern, '');
    }

    function checkInputFormat(value: string) {
        if (value != '') {
            return true;
        }

        return false;
    }

    return (
        <Container>
            <TimerModeTabs paleteColor="primary" content={[
                (jobForm),
                (restForm)
            ]} />
        </Container>
    )
}