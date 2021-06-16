import React, { Component } from 'react'
import { Badge, Button } from 'react-bootstrap';
import { armstrongOperation, fibonacciOperation, palindromeOperation, factorialOperation } from '../utils';

export default class MathematicalOperaions extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: '',
            selectedOption: '',
            resultValue: [],
        }
        this.calculationOperation = this.calculationOperation.bind(this);
    };

    calculationOperation() {
        if (this.state.inputValue) {
            if ((this.state.selectedOption === "Palindrome")) {
                const result = palindromeOperation(this.state.inputValue);
                this.setState({
                    ...this.state,
                    resultValue: [result]
                });
            }
            else if (this.state.selectedOption === "Fibonacci" ) {
                const result = fibonacciOperation(this.state.inputValue);
                this.setState({
                    ...this.state,
                    resultValue: result,
                });
            }
            else if (this.state.selectedOption === "Factorial") {
                const result = factorialOperation(this.state.inputValue);
                this.setState({
                    ...this.state,
                    resultValue: [result],
                });
            }
            else if (this.state.selectedOption === "Armstrong") {
                const result = armstrongOperation(this.state.inputValue);
                this.setState({
                    ...this.state,
                    resultValue: [result],
                });
            }
            else {
                alert('Please Select Option First');
            }
        }
        else {
            alert('Please Enter proper value');
        }
    }

    render() {
        return (
            <div>
                <h1>Click on Below Button For Particular Value</h1>
                <Button onClick={() => this.setState({...this.state, selectedOption: 'Palindrome', resultValue: []})}>Palindrome</Button>
                <Button onClick={() => this.setState({...this.state, selectedOption: 'Fibonacci', resultValue: []})}>Fibonacci</Button>
                <Button onClick={() => this.setState({...this.state, selectedOption: 'Factorial', resultValue: []})}>Factorial</Button>
                <Button onClick={() => this.setState({...this.state, selectedOption: 'Armstrong', resultValue: []})}>Armstrong</Button>
                <input value={!this.state.inputValue ? '' : this.state.inputValue} placeholder="Enter A Value" type="text" onChange={(event) => this.setState({...this.state, inputValue: parseInt(event.target.value)})} />
                <Button disabled={!this.state.inputValue} onClick={this.calculationOperation}>Value Show</Button>
                {
                    this.state.resultValue.length !== 0 ? 
                        (
                            <h3>
                                Selected Option is :- {this.state.selectedOption}
                                <br />
                                {
                                    this.state.resultValue.map((values, index) => <Badge key={index}>{values}</Badge>)
                                }
                            </h3>
                        ) : (
                            ''
                        )
                }
            </div>
        )
    }
}
