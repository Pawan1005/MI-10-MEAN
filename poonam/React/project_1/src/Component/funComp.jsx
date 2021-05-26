import React from 'react'

export default function funComp() {
    const date = new Date();
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div>
            <h1>This is the functional component</h1>
            <h2>Today is {date.toLocaleDateString()}</h2>
            <h2>Day {day[date.getDay()]}</h2>
            <h2>Time {date.toLocaleTimeString()}</h2>
            <hr />
        </div>
    )
}
