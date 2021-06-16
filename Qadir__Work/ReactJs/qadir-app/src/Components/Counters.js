import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Badge, Button, Card} from 'react-bootstrap';

class Counters extends Component {

    render() {

        return (
            <div>
                <Card style={{width: '50%'}}>
                    <Card.Header>Counter {this.props.counter.id}</Card.Header>
                    <Card.Body>
                        <Badge variant={`${this.props.counter.value <=0 ? "secondary" : "success"}`}>{this.props.counter.value<=0 ? "Zero" :this.props.counter.value}</Badge>
                    </Card.Body>
                    <Card.Footer>
                        {/* disabled={counter ===10} disabled={counter <=0} */}
                        <Button className="fs-1 fw-bold mr-3" variant="outline-success"  onClick={() => this.props.onIncrement(this.props.counter)}>+</Button>
                        <Button className="fs-1 fw-bold" variant="outline-danger"  onClick={() => this.props.onDecrement(this.props.counter)}>-</Button>
                        <Button className="fs-1 fw-bold" variant="warning"  onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default Counters