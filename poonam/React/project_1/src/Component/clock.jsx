import React, { useState } from 'react';
const Clock = () => {
    let time = new Date().toLocaleTimeString()
    const [ctime, setTime] = useState(time);
    const Update = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(Update, 1000);
    const date = new Date();
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
        <div>
            <h1>Clock Timer</h1>
            <h2>Today is {date.toLocaleDateString()}</h2>
            <h2>Day {day[date.getDay()]}</h2>
            <h1>Time {ctime}</h1>
            <hr />
        </div>
    );
};
export default Clock;
