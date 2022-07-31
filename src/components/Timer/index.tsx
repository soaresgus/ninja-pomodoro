import {
  ConfigurationsContainer,
  Container,
  ControlersContainer,
  PlayPauseButton,
  ResetButton,
  TimeText,
} from './styles';

import { MdTune, MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { PopoverButton } from '../PopoverButton';
import { ConfigurationsForm } from '../ConfigurationsForm';
import { TimerModeTabs } from '../TimerModeTabs';

import { useTimer } from '../../hooks/useTimer';

export function Timer() {
  const timer = useTimer();

  return (
    <IconContext.Provider value={{ size: '28' }}>
      <Container>
        <TimerModeTabs
          content={[
            <TimeText>
              {timer.formatSeconds(timer.actualJobTime, true, true)}
            </TimeText>,
            <TimeText>
              {timer.formatSeconds(timer.actualRestTime, true, true)}
            </TimeText>,
          ]}
          disabled={[false, timer.actualJobTime > 0 && timer.blockRest]}
          onClickActions={[
            () => {
              timer.resetTimer(timer.persistedJobTime);
              timer.setRestMode(false);
            },
            () => {
              timer.resetTimer(timer.persistedRestTime);
              timer.setRestMode(true);
            },
          ]}
        />
        <ControlersContainer>
          <PlayPauseButton
            onClick={() => {
              timer.setPlaying(!timer.playing);
            }}
          >
            {timer.playing ? <MdPause /> : <MdPlayArrow />}
          </PlayPauseButton>

          <ResetButton
            onClick={() => {
              timer.restMode
                ? timer.resetTimer(timer.persistedRestTime)
                : timer.resetTimer(timer.persistedJobTime);
            }}
          >
            <MdRefresh />
          </ResetButton>
        </ControlersContainer>

        <ConfigurationsContainer>
          <PopoverButton icon={<MdTune />} title="Configurações">
            <ConfigurationsForm />
          </PopoverButton>
        </ConfigurationsContainer>
      </Container>
    </IconContext.Provider>
  );
}
