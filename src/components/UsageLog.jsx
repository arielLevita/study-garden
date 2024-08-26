/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { LOCAL_STORAGE_KEY } from '../App';

const UsageLog = ({ isRunning }) => {
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    
    const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const initialRecords = tasks.records;
    const [records, setRecords] = useState(initialRecords);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 1000);
        } else if (!isRunning && startTime !== null) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, startTime]);

    useEffect(() => {
        if (!isRunning) {
            const now = new Date();
            const today = now.toISOString().split('T')[0];
            const minutesElapsed = Math.floor(elapsedTime / 60000);

            setRecords((prevRecords) => {
                const existingRecord = prevRecords.find(record => record.date === today);
                if (existingRecord) {
                    return prevRecords.map(record =>
                        record.date === today
                        ? { ...record, minutes: record.minutes + minutesElapsed }
                        : record
                    );
                } else {
                    return [...prevRecords, { date: today, minutes: minutesElapsed }];
                }
            });

            setElapsedTime(0);
        } else {
            setStartTime(Date.now() - elapsedTime);
        }
    }, [isRunning])

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        tasks.records = records;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    },[records])

    return (
        <></>
    );
};

export default UsageLog