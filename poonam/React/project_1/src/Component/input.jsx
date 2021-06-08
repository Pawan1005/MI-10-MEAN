import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    let name = this.refs.name.value;
    this.setState({
      value: name
    });
  }

  render() {
    return (
      <>
        <h3>Assignment 4</h3>
        <form ref="myform" className="ml-5">
          <input type="text" ref="name" placeholder="Enter Name" /><br /><br />
          <Button variant="outline-primary" onClick={(e) => this.fSubmit(e)} >Submit </Button><br /><br />
          <span>{this.state.value}</span>
        </form>
        <hr />
      </>
    );
  }
}

export default Input;
