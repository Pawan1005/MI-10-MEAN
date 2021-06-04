import React, { Component } from "react";

export default class IncrementDecrement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    changecountincrement = () => {
        this.setState({
            count: this.state.count + 1,
        });
        if(this.state.count>9) {alert("value greater than 10")}
    };
    changecountdecrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
        if(this.state.count<1) {alert("value less than 0")}
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>ASSIGNMENT 2</h1>
                <button onClick={this.changecountincrement}>increment</button>
                <span style={{margin:20, fontWeight:"bold"}}>{this.state.count}</span>
                <button onClick={this.changecountdecrement}>decrement</button>
            </div>
        );
    }
}
