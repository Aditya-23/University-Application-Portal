import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

export default function Application() {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("INVOKED HERERREE")
  }
    return (
        <div className='application-container'>
            <Form onSubmit={(e) => onSubmitHandler(e)}>
              <Form.Label><h3>Personal Information</h3></Form.Label>
                <Form.Group className="mb-3" >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name as per your passport"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your personal email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name as per your passport"/>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Applying to
                    </Form.Label>
                    <Form.Control type="text" value={"Northeastern"} disabled/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Semester Intake -
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
