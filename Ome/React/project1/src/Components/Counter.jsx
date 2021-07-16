import React, { Component } from 'react';

export class StateComp extends Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0, show : true };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 2});
    }

    render() {
        return (
            <div>
                <h1>Counter using setState</h1>
                <p>Count is :{this.state.clicks} </p>
                <button onClick={this.IncrementItem}>Click here increase count by 2</button>
            </div>
        );
    }
}

export default StateComp;