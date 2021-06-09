import React, { Component } from "react";

class Currencyconvertor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            convert: 0,
        };
    }
    ChangeAmount = (event) => {
        this.setState({
            amount: event.target.value,
        });
    };
    ChangeCurrency = (event) => {
        this.setState({
            currency: event.target.value,
        });
    };
    SetCurrency = (event) => {
        event.preventDefault();
        const convert =
            this.state.currency === "Pound"
                ? this.state.amount * 0.0097
                : this.state.amount * 0.014;
        this.setState({ convert });
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>ASSIGNMENT 1</h1>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    value={this.state.amount}
                    onChange={this.ChangeAmount}
                />
                <select
                    value={this.state.currency}
                    onChange={this.ChangeCurrency}
                >
                    <option value="">select</option>
                    <option value="Pound">Pound</option>
                    <option value="Dollar">United States Dollar</option>
                </select>
                <button onClick={this.SetCurrency}>CALCULATE</button>
                <h2>
                    conversion of {this.state.amount}rs to {this.state.currency}{" "}
                    :- {this.state.convert}
                </h2>
            </div>
        );
    }
}

export default Currencyconvertor;
