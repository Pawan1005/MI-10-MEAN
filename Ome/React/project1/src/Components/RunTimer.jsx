import React, { Component } from 'react';

class RunTimer extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }

    currentTime(){
        this.setState({date : new Date()})
    }

    componentDidMount(){
        setInterval(()=>this.currentTime(),1000)
    }

    render() {
        return (
            <div className="App">
                <h1>Clock Time</h1>

                <h2>Today's Date :
                    {
                        this.state.date.toLocaleString('en-US',
                            {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })
                    }
                </h2>

                <h2>Day :
                    {
                        this.state.date.toLocaleString('en-US',
                            {
                                weekday: 'short'
                            })
                    }
                </h2>
                <h2>
                    Current Time :
                    {
                        this.state.date.toLocaleTimeString(
                            ('en-US', { hour12: true })
                        )
                    }
                </h2>
            </div>
        );
    }
}

export default RunTimer;

