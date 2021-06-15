import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class FruitInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
             inputValue: ''
        }
    }
    
    componentDidMount() {
        this.props.innerRef?.current.focus();
    }

    handleInputValue = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    setInputValue = () => {
        if (this.state.inputValue) {
            this.props.onInputChange(this.state.inputValue);
            this.setState({ inputValue: ''});
            this.props.innerRef?.current.focus();
        }
        else {
            alert("Please Enter a Fruit Name");
            this.props.innerRef?.current.focus();
        }
    }

    render() {
        return (
            <div className="fruit-footer">
              <input className="fruitInput" ref={this.props.innerRef} placeholder="Enter A Fruit" value={this.state.inputValue} onChange={this.handleInputValue} />
              <Button onClick={this.setInputValue}>Add Fruit to Basket</Button>
            </div>
        )
    }
}

export default React.forwardRef((props, ref) => <FruitInput innerRef={ref} {...props}/>)
