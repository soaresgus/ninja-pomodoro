import { TimerModeTabs } from '../TimerModeTabs';
import {
  Container,
  InputContainer,
  StyledInput,
  FormContainer,
  PopoverText,
  StyledButton,
} from './styles';

import { MdHelp } from 'react-icons/md';
import { PopoverButton } from '../PopoverButton';
import { CheckboxWithLabel } from '../CheckboxWithLabel';
import React, { useState } from 'react';
import usePersistedState from '../../hooks/usePersistedState';
import { useTimer } from '../../hooks/useTimer';

export function ConfigurationsForm() {
  const [validJobForm, setValidJobForm] = useState([true, true]);
  const [validRestForm, setValidRestForm] = useState([true]);

  const [automaticJobTime, setAutomaticJobTime] = usePersistedState(
    'automaticJobTime',
    false
  );
  const [automaticRestTime, setAutomaticRestTime] = usePersistedState(
    'automaticRestTime',
    false
  );
  const [pomodoroAmount, setPomodoroAmount] = usePersistedState(
    'pomodoroAmount',
    1
  );

  const timer = useTimer();

  function handleSetValidFormAccordingState(
    formState: boolean[],
    formStateDispatch: React.Dispatch<React.SetStateAction<boolean[]>>,
    value: boolean,
    index: 0 | 1
  ) {
    let validFormValues: boolean[] = [];

    formState.forEach((element, key) => {
      validFormValues[key] = element;
      if (key == index) {
        validFormValues[key] = value;
      }
    });

    formStateDispatch(validFormValues);
  }

  function formIsValid(values: boolean[]) {
    return values.every((element) => element);
  }

  function formatValue(pattern: RegExp, value: string) {
    return value.replace(pattern, '');
  }

  function checkInputFormat(value: string) {
    if (value != '' && value != '0') {
      return true;
    }

    return false;
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
            value={timer.formatSeconds(timer.persistedJobTime)}
            disabled={automaticJobTime}
            onChange={(event) => {
              event.target.value = formatValue(
                new RegExp(/\D/),
                event.target.value
              );
              handleSetValidFormAccordingState(
                validJobForm,
                setValidJobForm,
                checkInputFormat(event.target.value),
                0
              );
              timer.setPersistedJobTime(Number(event.target.value) * 60);
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
          <CheckboxWithLabel
            id="automatic-job-time"
            labelText="Tempo por pomodoro"
            checked={automaticJobTime}
            onChange={(event) => {
              setAutomaticJobTime(event.target.checked);
              if (!event.target.checked) {
                setAutomaticRestTime(event.target.checked);
              }
              timer.setPersistedJobTime(Number(pomodoroAmount) * (25 * 60));
              timer.setPersistedRestTime(Number(pomodoroAmount) * (5 * 60));
            }}
          />
        </div>
        <PopoverButton icon={<MdHelp />} paleteColor="light">
          <PopoverText>
            Define o tempo automaticamente pela quantidade de pomodoros.
            <p>[1x = 25 min]</p>
          </PopoverText>
        </PopoverButton>
      </InputContainer>

      {automaticJobTime && (
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
                event.target.value = formatValue(
                  new RegExp(/\D/),
                  event.target.value
                );
                handleSetValidFormAccordingState(
                  validJobForm,
                  setValidJobForm,
                  checkInputFormat(event.target.value),
                  1
                );
                timer.setPersistedJobTime(
                  Number(event.target.value) * (25 * 60)
                );
                setPomodoroAmount(Number(event.target.value));
                automaticRestTime &&
                  timer.setPersistedRestTime(
                    Number(event.target.value) * (5 * 60)
                  );
              }}
              InputProps={{
                inputMode: 'numeric',
                endAdornment: <label htmlFor="qtd-pomodoro">x</label>,
              }}
            />
          </div>
        </InputContainer>
      )}

      <InputContainer>
        <CheckboxWithLabel
          id="block-rest"
          labelText="Bloquear descanso"
          checked={timer.blockRest}
          onChange={(event) => {
            timer.setBlockRest(event.target.checked);
          }}
        />
        <PopoverButton icon={<MdHelp />} paleteColor="light">
          <PopoverText>
            Bloqueia o temporizador de descanso enquanto o de trabalho não
            encerra.
          </PopoverText>
        </PopoverButton>
      </InputContainer>
    </FormContainer>
  );

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
            value={timer.formatSeconds(timer.persistedRestTime)}
            disabled={automaticRestTime}
            onChange={(event) => {
              event.target.value = formatValue(
                new RegExp(/\D/),
                event.target.value
              );
              handleSetValidFormAccordingState(
                validRestForm,
                setValidRestForm,
                checkInputFormat(event.target.value),
                0
              );
              timer.setPersistedRestTime(Number(event.target.value) * 60);
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
          checked={automaticRestTime}
          onChange={(event) => {
            setAutomaticRestTime(event.target.checked);
            timer.setPersistedRestTime(Number(pomodoroAmount) * (5 * 60));
          }}
          disabled={!automaticJobTime}
        />
        <PopoverButton icon={<MdHelp />} paleteColor="light">
          <PopoverText>
            Define um tempo automático de acordo com a quantidade de pomodoros
            citada nas configurações do modo de trabalho.
            <p>[1 pomodoro = 5 min. descanso]</p>
          </PopoverText>
        </PopoverButton>
      </InputContainer>
    </FormContainer>
  );

  return (
    <Container>
      <TimerModeTabs paleteColor="primary" content={[jobForm, restForm]} />
    </Container>
  );
}
