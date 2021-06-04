import React, { Component, createRef } from 'react'
import FruitInput from './FruitInput';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
             furitBasket: [ { id: 1, item: "Mango"},
                            { id: 2, item: "Orange"},
                            { id: 3, item: "Apple"}]
        }
        this.childRef = createRef();
    }

    inputFruitBasket = (fruit) => {
        const newFruit = {
            id: this.state.furitBasket.length+1,
            item: fruit
        }
        this.setState({ furitBasket: [...this.state.furitBasket, newFruit]
        });
    }

    render() {
        return (
            <div className="fruit">
                    <h1>List of Fruit</h1>
                    <ol>
                        {
                            this.state.furitBasket.map((fruit) => (
                                <li key={fruit.id}>{fruit.item}</li>
                            ))
                        }
                    </ol>
                    <FruitInput fruit={this.state.furitBasket.item} ref={this.childRef} onInputChange={this.inputFruitBasket} />
            </div>
        )
    }
}
