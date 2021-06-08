import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class Temperature extends Component {
    constructor(){
        super();
        this.state = {input : 0, unit : 'Select Unit', convert: 0};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }

    handleChange(e){
        this.setState({input : parseInt(e.target.value)});
    }

    selectChange(e){
        this.setState({unit: e.target.value});
    }

    handleClick(e){
        e.preventDefault();
        console.log("click")
        let temp = 0;
        if (this.state.unit === "celcius") {
            temp = (this.state.input * 1.8) + 32;
            this.setState({convert: temp});
        }
        else {
            temp = (this.state.input - 32) * 5/9;
            this.setState({convert: temp});
        }
    }
    
    render() {
        return (
            <div >
                <h6>Temperature Converter</h6>
                <form className="ml-5">
                <input type="text" placeholder="Enter Temperature" onChange={this.handleChange}/><br /><br />
                <select name="unit" id="unit" onChange={this.selectChange}>
                    <option value="select" >Select Unit</option>
                    <option value="celcius">Celcius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </select><br /><br />
                    <Button variant="outline-primary" onClick={this.handleClick} disabled={this.state.unit === 'Select Unit'}>Convert</Button><br /><br />
                    <span>{this.state.convert}</span>
                </form>
                <hr />
            </div>
        )
    }
}

export default Temperature;
