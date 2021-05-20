import React from 'react'

function Timer({date}) {
    return (
        <div className="App">
            <h1>Clock</h1>
            <h2>
                Today Date: {date.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
            </h2>
            <h2>Day: {date.toLocaleString('en-US', { weekday: 'long' })}</h2>
            <h2>Current Time: {date.toLocaleTimeString('en-US', {hour12: true})}</h2>
            <hr />
        </div>
    )
}

export default Timer
