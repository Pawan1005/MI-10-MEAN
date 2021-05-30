import React, { Component } from 'react';

class CurrencyConverter extends Component {

    constructor(){
        super();
        this.state = {
            actualAmount: 0,
            currencyLabel: 'Select Currency',
            convertAmount: 0
        }
        this.convertCurrency = this.convertCurrency.bind(this);
    }

    convertCurrency(event) {
        event.preventDefault();

        let amount = 0;
        if (this.state.currencyLabel === "US Dollar") {
            amount = this.state.actualAmount * 72.74;
            this.setState({
                convertAmount: amount
            });
        }

        else if (this.state.currencyLabel === "Pound") {
            amount = this.state.actualAmount * 102.90;
            this.setState({
                convertAmount: amount
            });
        }

        else {
            amount = this.state.actualAmount * 88.98;
            this.setState({
                convertAmount: amount
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Currency Converter</h1>
                <form>
                    <input type="text" onChange={(event) => this.setState({...this.state, actualAmount: parseInt(event.target.value)})} value={this.state.actualAmount} />
                    <select onChange={(event) => this.setState({...this.state, currencyLabel: event.target.value})}>
                        <option defaultValue="Select Currency">Select Currency</option>
                        <option value="US Dollar">US Dollar</option>
                        <option value="Pound">Pound</option>
                        <option value="Euro">Euro</option>
                    </select>
                    <button disabled={this.state.currencyLabel === 'Select Currency'} onClick={this.convertCurrency}>Calculate</button>
                    <input value={`Rs. ${this.state.convertAmount.toFixed(2)}`} />
                </form>
            </div>
        )
    }
}
export default CurrencyConverter;
