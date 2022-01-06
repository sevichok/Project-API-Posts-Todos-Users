import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from "react";

const TimerDiv = styled('div')`
    display:flex;
    justify-content:center;
    margin: auto;
    font-family: 'Playfair Display', serif;
    color: white;
    font-size: 50px;
    padding-bottom: 16px;
`;

const date = new Date();

function Timer() {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <TimerDiv>
            Current time : {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
        </TimerDiv>
    );
}
export default Timer;

