import React from 'react';
import { Button, Card, Dropdown } from 'react-bootstrap';


const JobEntry = ({job}) =>{
    console.log('job title==> ', job);
    return (
    <div>
        <Card  bg="success" text="white" >
            <Card.Body>
                <Card.Title>{job.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.jobTitle}</Card.Subtitle>
                <Card.Text>Applied: {new Date().toString().slice(0,21)}{"\n"}
                           Technical:
                           Challenge:
                           OnSite:
                
                </Card.Text>
                <Card.Link href="#">Job Post</Card.Link>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Stage
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Technical</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Challenge</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">OnSite</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button>X</Button>
            </Card.Body>
        </Card>;
    </div>
)
    }


export default JobEntry;
