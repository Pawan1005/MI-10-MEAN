import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        // Increment by props value and store into count state
        this.setState((prevState, props) => ({
            count: prevState.count + props.addTwo
        }));
    }

    render() {
        return (
            <div>
                <h4>Count: {this.state.count}</h4>
                <br/>
                {/* based on onClick event count value is increment */}
                <button onClick={() => this.incrementCount()}>Increment Counter By Two</button>
            </div>
        )
    }
}

export default Counter;
