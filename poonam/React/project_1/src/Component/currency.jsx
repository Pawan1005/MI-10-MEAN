import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
export class Currency extends Component {
    constructor(){
        super();
        this.state = {input : 0, txt : 'Select Currency', convert: 0};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }

    handleChange(e){
        this.setState({input : parseInt(e.target.value)});
    
    }
    selectChange(e){
        this.setState({txt: e.target.value});
    }
    handleClick(e){
        e.preventDefault();
        console.log("click")
        let amount = 0;
        if (this.state.txt === "usd") {
            amount = this.state.input * 72.42;
            this.setState({convert: amount});
        }
        else {
            amount = this.state.input * 82.86;
            this.setState({convert: amount});
        }
    }
    
    render() {
        return (
            <div >
                <h3>Assignment 1</h3>
                <h6>Currency Converter</h6>
                <form className="ml-5">
                <input type="text" placeholder="Enter Amount" onChange={this.handleChange}/><br /><br />
                <select name="currency" id="currency" onChange={this.selectChange}>
                    <option value="select">Select Currency</option>
                    <option value="usd">US Dollor</option>
                    <option value="pounds">Pounds</option>
                </select><br /><br />
                    <Button variant="outline-primary" onClick={this.handleClick} disabled={this.state.txt === 'Select Currency'} >Calculate</Button><br /><br />
                    <span>{this.state.convert}</span>
                </form>
                <hr />
            </div>
        )
    }
}

export default Currency;
