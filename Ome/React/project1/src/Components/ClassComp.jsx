import React, { Component } from 'react';

class Classtime extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div className="App">
                <h1>This is a "Class Component" for time</h1>

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
                        weekday : 'short'        
                    })
                }
                </h2>
                
            </div>
        );
    }
}

export default Classtime;
