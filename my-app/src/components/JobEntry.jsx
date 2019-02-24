import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';


class JobEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'test'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        console.log('changed::', event.target.value)
        this.setState({value:event.target.value})
        this.props.handleStageChange(event)
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submitted: ', this.state.value)
    }
    

    render(){

        return (
        <div>
            <input></input>
            <Card  bg="success" text="white" >
                <Card.Body>
                    <Card.Title>{this.props.job.company}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.job.jobTitle}</Card.Subtitle>
                    <Card.Text>Applied: {new Date().toString().slice(0,21)}{"\n"}
                               Technical:
                               Challenge:
                               OnSite:
                    
                    </Card.Text>
                    <Card.Link href="#">Job Post</Card.Link>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
                                <option value='technical'>Technical</option>
                                <option value='challenge'>Challenge</option>
                                <option value='onSite'>OnSite</option>
                                <option value='initial'>Initial</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <Button variant="warning">X</Button>
                </Card.Body>
            </Card>;
        </div>
        )
    }
}


export default JobEntry;
