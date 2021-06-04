import React, { Component, createRef } from 'react'
import FocusInput from './FocusInput';

export default class FocusInputValue extends Component {
    constructor(){
        super();
        this.childRef = createRef();
    }
    
    render() {
        return (
            <div>
                <FocusInput ref={this.childRef} />
            </div>
        )
    }
}
