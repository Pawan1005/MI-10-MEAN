import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Badge, Button, Card} from 'react-bootstrap';

class BootstrapCounter extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    };

    incrementCounter() {
        if (this.state.counter <10 && this.state.counter >=0) {
            this.setState({
                counter: this.state.counter + 1
            });
        }
        else{
            alert('Counter limit is 10');
        }
    }

    decrementCounter() {
        if (this.state.counter >0){
            this.setState({
                counter: this.state.counter - 1
            });
        }
        else {
            alert('Counter Could Not be Less than 0');
        }
        
    }

    render() {
        let {counter} = this.state;
        return (
            <div>
                <Card style={{width: '10rem', margin: '1rem 10rem 1rem 10rem'}}>
                    <Card.Header className="bg-primary">Counter</Card.Header>
                    <Card.Body>
                        <Badge variant={`${counter <=0 ? "secondary" : "success"}`}>{counter<=0 ? "Zero" :counter}</Badge>
                    </Card.Body>
                    <Card.Footer>
                        {/* disabled={counter ===10} disabled={counter <=0} */}
                        <Button className="fs-1 fw-bold mr-3" variant="outline-success"  onClick={() => this.incrementCounter()}>+</Button>
                        <Button className="fs-1 fw-bold" variant="outline-danger"  onClick={() => this.decrementCounter()}>-</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default BootstrapCounter
