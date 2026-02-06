import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

// useEffect(function, dependencies array)
function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(timerID);
    })


    return (
        <div className="clock-container">
            <h2>Digital Clock</h2>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    )
}

export default DigitalClock;