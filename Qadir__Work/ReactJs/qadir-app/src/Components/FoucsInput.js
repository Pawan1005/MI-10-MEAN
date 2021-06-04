import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class FocusInput extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: '',
            confirmValue: '',
        }
    }

    componentDidMount() {
        this.props.ref?.current.focus();
    }

    handelInputValue = (event) => {
        this.setState({inputValue: event.target.value})
    }

    displayInputValue = () => {
        if (!this.state.inputValue) {
            alert('Text Field is Empty');
            this.props.ref?.current.focus();
        }
        this.setState({
            ...this.state,
            confirmValue: this.state.inputValue
        })
    }

    render() {
        return (
            <div>
                <input ref={this.props.innerRef} value={this.state.inputValue} onChange={this.handelInputValue} />
                <Button onClick={this.displayInputValue}>Show Value</Button>
                {
                    this.state.confirmValue ? 
                        (<h4>{this.state.confirmValue}</h4>)
                        : ''
                }
            </div>
        )
    }
}

export default React.forwardRef((props, ref) => <FocusInput ref={ref} {...props}/>)
