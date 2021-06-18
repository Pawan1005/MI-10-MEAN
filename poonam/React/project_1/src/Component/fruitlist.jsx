import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Fruitlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            fruits: [{ id: 1, value: "Mango" },
            { id: 2, value: "Orange" },
            { id: 3, value: "Apple" }]
        }
    }

    onChange(value) {
        this.setState({
            userInput: value,
        });
    }

    onClick() {
       
            const userInput = {
                id: this.state.fruits.length + 1,
                value: this.state.userInput
            };

            const fruits = [...this.state.fruits];
            fruits.push(userInput);

            this.setState({
                fruits,
                userInput: ""
            });
        
    }

    render() {
        return (
            <div>
                <h2>Fruits</h2>
                <input
                    placeholder="add item"
                    className="ml-3"
                    value={this.state.userInput}
                    onChange={item => this.onChange(item.target.value)}
                />
                <Button variant="outline-primary" className="ml-3" onClick={() => this.onClick()}>ADD</Button>
                <ul>
                    {this.state.fruits.map(item => {
                        return (
                            <li>{item.value}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Fruitlist;
