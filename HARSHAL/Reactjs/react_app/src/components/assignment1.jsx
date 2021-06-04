import React, { Component } from "react";

class Currencyconvertor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: "",
            convert: "",
        };
    }
    changeamount = (event) => {
        this.setState({
            amount: event.target.value,
        });
    };
    changecurrency = (event) => {
        this.setState({
            currency: event.target.value,
        });
    };
    setcurrency = (event) => {
        event.preventDefault();
        const convert =
            this.state.currency === "Pound"
                ? this.state.amount * 0.097
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
                    onChange={this.changeamount}
                />
                <select
                    value={this.state.currency}
                    onChange={this.changecurrency}
                >
                    <option value="">select</option>
                    <option value="Pound">Pound</option>
                    <option value="Dollar">United States Dollar</option>
                </select>
                <button onClick={this.setcurrency}>CALCULATE</button>
                <h2>
                    conversion of {this.state.amount}rs to {this.state.currency}{" "}
                    :- {this.state.convert}
                </h2>
            </div>
        );
    }
}

export default Currencyconvertor;
