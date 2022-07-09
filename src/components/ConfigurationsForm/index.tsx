import { TimerModeTabs } from "../TimerModeTabs";
import { Container, InputContainer, StyledInput, FormContainer, PopoverText, FormFooter, StyledButton } from "./styles";

import { MdHelp } from 'react-icons/md'
import { PopoverButton } from "../PopoverButton";
import { CheckboxWithLabel } from "../CheckboxWithLabel";
import React, { useEffect, useState } from "react";
import usePersistedState from "../../utils/usePersistedState";

export function ConfigurationsForm() {
    const [validJobForm, setValidJobForm] = useState([true, true]);
    const [validRestForm, setValidRestForm] = useState([true]);

    const [jobFormInputValues, setJobFormInputValues] = useState([0, 0]);
    const [restFormInputValues, setRestFormInputValues] = useState([0]);

    const defaultJobTime = 25 * 60;
    const defaultPomodoroAmount = 1;
    const defaultBlockRest = true;

    const defaultRestTime = (defaultJobTime / 5);
    const defaultAutomaticTime = true;

    const [jobTime, setJobTime] = usePersistedState('jobTime', defaultJobTime);
    const [pomodoroAmount, setPomodoroAmount] = usePersistedState('pomodoroAmount', defaultPomodoroAmount);
    const [blockRest, setBlockRest] = usePersistedState('blockRest', defaultBlockRest);

    const [restTime, setRestTime] = usePersistedState('restTime', defaultRestTime);
    const [automaticTime, setAutomaticTime] = usePersistedState('automaticTime', defaultAutomaticTime);

    const [actualTime, setActualTime] = usePersistedState('actualTime', jobTime);

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
        console.log(FormValues)
    }

    const formIsValid = (values: boolean[]) => {
        return values.every(element => element);
    }

    function formatSeconds(seconds: number, showSeconds?: boolean) {
        let hour = Math.floor(seconds / 3600);
        let minute = Math.floor((seconds % 3600) / 60);
        let second = seconds % 60;

        const zeroPadStart = (string: string) => string.padStart(2, '0');

        if (showSeconds) {
            if (hour >= 1) {
                return `${zeroPadStart(hour.toString())}:${zeroPadStart(minute.toString())}:${zeroPadStart(second.toString())}`
            } else {
                return `${zeroPadStart(minute.toString())}:${zeroPadStart(second.toString())}`
            }
        }

        if (hour >= 1) {
            return `${zeroPadStart(hour.toString())}:${zeroPadStart(minute.toString())}`
        } else {
            return `${minute.toString()}`
        }
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
                        value={formatSeconds(jobTime)}
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
                        value={pomodoroAmount}
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
                    checked={blockRest}
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
                        value={formatSeconds(restTime)}
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
                    checked={automaticTime}
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