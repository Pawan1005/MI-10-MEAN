import React, { Component } from "react";
import Fruits from "./Fruits";

class FruitList extends Component {
  state = {
    fruits: [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Mango" },
      { id: 4, name: "Avocado" },
    ],
    addName: "",
  };

  inputRef = React.createRef();

  handelAdd = () => {
    this.inputRef.current.focus();

    if (this.state.addName === "") return alert("please enter a name");

    const fruits = [
      ...this.state.fruits,
      {
        id: Math.random(),
        name: this.state.addName,
      },
    ];

    this.setState({ fruits });
  };

  render() {
    return (
      <div className="container">
        <h3>Fruits</h3>
        <ol>
          {this.state.fruits.map((fruit) => (
            <li key={fruit.id}>{fruit.name}</li>
          ))}
        </ol>
        <Fruits
          text={(addName) => this.setState({ addName })}
          ref={this.inputRef}
        />
        <button onClick={this.handelAdd} className="btn btn-primary my-2">
          Add
        </button>
        <hr />
      </div>
    );
  }
}

export default FruitList;
