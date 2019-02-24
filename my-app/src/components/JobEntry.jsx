import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';


class JobEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {current: this.props.job.stage, new: 'test2'}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log('changed::', event.target.value)
        this.setState({value:{current:this.props.job.stage, new : event.target.value}},()=>console.log('In State: ', this.state))
        this.props.handleStageChange(event)
    }


    render(){

        return (
        <div>
            <Card  bg="success" text="white" >
                <Card.Body>
                    <Card.Title>{this.props.job.company}</Card.Title>
                    <Card.Text>{this.props.job.jobTitle}</Card.Text>
                    {/* <Card.Subtitle className="mb-2 text-muted">{this.props.job.jobTitle}</Card.Subtitle>
                    <Card.Text>Applied: {new Date().toString().slice(0,21)}{"\n"}
                               Technical:
                               Challenge:
                               OnSite:
                    
                    </Card.Text> */}
                    {/* <Card.Link href="#">Job Post</Card.Link> */}
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Stage</Form.Label>
                            <Form.Control as="select" value={this.state.value.new} name={this.props.job.company}  onChange={this.handleChange}>
                                <option value=""></option>
                                <option value='technical'>Technical</option>
                                <option value='challenge'>Challenge</option>
                                <option value='onSite'>OnSite</option>
                                <option value='initial'>Initial</option>
                            </Form.Control>
                        </Form.Group>
                        
                    </Form>

                    <Button variant="warning">X</Button>
                </Card.Body>
            </Card>
        </div>
        )
    }
}


export default JobEntry;
