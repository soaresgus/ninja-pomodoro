import { useState, useEffect } from "react";
import usePersistedState from "./usePersistedState";

export const useTimer = () => {
    const defaultJobTime = (25 * 60);
    const defaultRestTime = (defaultJobTime / 5);

    const [playing, setPlaying] = useState(false);

    const [persistedJobTime, setPersistedJobTime] = usePersistedState('jobTime', defaultJobTime);
    const [persistedRestTime, setPersistedRestTime] = usePersistedState('restTime', defaultRestTime);

    const [globalTime, setGlobalTime] = useState<number>(persistedJobTime);
    const [actualJobTime, setActualJobTime] = useState<number>(persistedJobTime);
    const [actualRestTime, setActualRestTime] = useState<number>(persistedRestTime);

    const [restMode, setRestMode] = useState(false);

    const pauseTimer = () => {
        setPlaying(false);
    }

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
        pauseTimer;
        setGlobalTime(actualTimeValue);
        setActualJobTime(persistedJobTime);
        setActualRestTime(persistedRestTime);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setGlobalTime((state) => state - 1)
        }, 1000);

        if (!playing || globalTime < 0) {
            setPlaying(false);
            clearTimeout(timeout);
            return;
        }

        restMode ? setActualRestTime(globalTime) : setActualJobTime(globalTime)

    }, [playing, globalTime]);

    return {
        playing,
        setPlaying,
        persistedJobTime,
        setPersistedJobTime,
        persistedRestTime,
        setPersistedRestTime,
        actualJobTime,
        setActualJobTime,
        actualRestTime,
        setActualRestTime,
        globalTime,
        setGlobalTime,
        restMode,
        setRestMode,
        pauseTimer,
        formatSeconds,
        resetTimer
    }
}