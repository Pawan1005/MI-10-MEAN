import React, { Component } from "react";
import ForwardingRefs from "./ForwardingRefs";

class ParentForwardingRefs extends Component {
  state = {
    text: "",
    newText: "",
  };
  inputRef = React.createRef();

  handelClick = () => {
    this.inputRef.current.focus();
    let newText = this.state.newText;
    if (this.state.text === "")
      return this.setState({ newText: "text field is blank" });
    newText = this.state.text;
    this.setState({ newText });
  };

  render() {
    return (
      <div className="container my-5">
        <h3>Forwarding Refs</h3>
        <ForwardingRefs
          text={(text) => this.setState({ text })}
          newText={this.state.newText}
          ref={this.inputRef}
        />
        <button onClick={this.handelClick} className="btn btn-primary">
          Click
        </button>
        <hr />
      </div>
    );
  }
}

export default ParentForwardingRefs;
