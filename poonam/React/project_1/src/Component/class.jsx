import React, { Component } from 'react'

export class First extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }
    render() {
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            <div>
                <h1>This is the Class Component</h1>
                <h3>Today is {this.state.date.toLocaleDateString()} </h3>
                <h3>Day {day[this.state.date.getDay()]}</h3>
                <h3>Time {this.state.date.toLocaleTimeString()}</h3>
                <hr />
            </div>
        )
    }
}

export default First;
