import react, { useState, useEffect, useContext } from "react";

import { TimerContext } from "../context/TimerContext";

export const useTimer = () => {
    const timerContext = useContext(TimerContext);

    const persistedJobTime = timerContext.timer.jobTime;
    const persistedRestTime = timerContext.timer.restTime;

    const [playing, setPlaying] = useState(false);

    const [globalTime, setGlobalTime] = useState<number>(persistedJobTime);
    const [actualJobTime, setActualJobTime] = useState<number>(persistedJobTime);
    const [actualRestTime, setActualRestTime] = useState<number>(persistedRestTime);

    const [restMode, setRestMode] = useState(false);

    const formatSeconds = (seconds: number, showSeconds?: boolean, showHours?: boolean) => {
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

        if (showHours) {
            if (hour >= 1) {
                return `${zeroPadStart(hour.toString())}:${zeroPadStart(minute.toString())}`
            } else {
                return `${minute}`
            }
        }

        minute = seconds / 60;
        return `${minute}`
    }

    const resetTimer = (actualTimeValue: number) => {
        setPlaying(false);
        setGlobalTime(actualTimeValue);
        setActualJobTime(persistedJobTime);
        setActualRestTime(persistedRestTime);
    }

    useEffect(() => {
        restMode ? setActualRestTime(globalTime) : setActualJobTime(globalTime)

        const timeout = setTimeout(() => {
            playing && globalTime > 0 && setGlobalTime(state => state - 1);
        }, 1000);


        if (globalTime <= 0 || !playing) {
            clearTimeout(timeout);
            setPlaying(false);
        }

        return () => { clearTimeout(timeout) };
    }, [playing, globalTime]);

    useEffect(() => {
        setActualJobTime(persistedJobTime)
    }, [persistedJobTime])

    useEffect(() => {
        setActualRestTime(persistedRestTime)
    }, [persistedRestTime])

    return {
        playing,
        setPlaying,
        persistedJobTime,
        setPersistedJobTime: timerContext.updateJobTime,
        persistedRestTime,
        setPersistedRestTime: timerContext.updateRestTime,
        actualJobTime,
        setActualJobTime,
        actualRestTime,
        setActualRestTime,
        globalTime,
        setGlobalTime,
        restMode,
        setRestMode,
        blockRest: timerContext.timer.blockRest,
        setBlockRest: timerContext.updateBlockRest,
        formatSeconds,
        resetTimer
    }
}