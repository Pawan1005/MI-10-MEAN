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
        if(this.state.count===9) {alert("limit reached")}
    };
    changecountdecrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
        if(this.state.count===1) {alert("limit reached")}
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>ASSIGNMENT 2</h1>
                <button disabled={this.state.count === 10} onClick={this.changecountincrement}>increment</button>
                <span style={{margin:20, fontWeight:"bold"}}>{this.state.count}</span>
                <button disabled={this.state.count === 0} onClick={this.changecountdecrement}>decrement</button>
            </div>
        );
    }
}
