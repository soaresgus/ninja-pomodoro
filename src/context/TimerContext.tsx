import React, { createContext, useCallback } from 'react';
import usePersistedState from '../hooks/usePersistedState';

interface ITimer {
  jobTime: number;
  restTime: number;
  blockRest: boolean;
}

interface ITimerContext {
  timer: ITimer;
  updateJobTime(seconds: number): void;
  updateRestTime(seconds: number): void;
  updateBlockRest(state: boolean): void;
}

const jobTimeDefaultValue = 25 * 60;
const restTimeDefaultValue = 5 * 60;
const blockRestDefaultValue = true;

const TimerContext = createContext<ITimerContext>({
  timer: {
    jobTime: jobTimeDefaultValue,
    restTime: restTimeDefaultValue,
    blockRest: blockRestDefaultValue,
  },
  updateJobTime: (seconds: number) => {},
  updateRestTime: (seconds: number) => {},
  updateBlockRest: (state: boolean) => {},
});

const TimerProvider = ({ children }: { children: JSX.Element }) => {
  const [jobTime, setJobTime] = usePersistedState(
    'jobTime',
    jobTimeDefaultValue
  );
  const [restTime, setRestTime] = usePersistedState(
    'restTime',
    restTimeDefaultValue
  );
  const [blockRest, setBlockRest] = usePersistedState(
    'blockRest',
    blockRestDefaultValue
  );

  const updateJobTime = useCallback((seconds: number) => {
    setJobTime(seconds);
  }, []);

  const updateRestTime = useCallback((seconds: number) => {
    setRestTime(seconds);
  }, []);

  const updateBlockRest = useCallback((state: boolean) => {
    setBlockRest(state);
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timer: { jobTime, restTime, blockRest },
        updateJobTime,
        updateRestTime,
        updateBlockRest,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
