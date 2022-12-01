import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

export default function Application() {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("INVOKED HERERREE")
    }
    return (
        <div className='application-container'>
            <Form encType='multipart/form-data' onSubmit={(e) => onSubmitHandler(e)}>
                <Form.Label>
                    <h3>Personal Information</h3>
                </Form.Label>
                <Form.Group className="mb-3">
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

                <Form.Group className="mb-3">
                    <Form.Select>
                        <option>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Label>
                    <h3>University Information</h3>
                </Form.Label>

                <Form.Group className="mb-3">
                    <Form.Label>Applying to
                    </Form.Label>
                    <Form.Control type="text" value={"Northeastern"} disabled/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Semester Intake
                    </Form.Label>
                    <Form.Select>
                        <option value="spring 2023">Spring 2023</option>
                        <option value="fall 2023">Fall 2023</option>
                        <option value="spring 2024">Spring 2024</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Select your program
                    </Form.Label>
                    <Form.Select>
                        <option>Select from the list of programs</option>
                        <option value="SES">SES</option>
                        <option value="IS">IS</option>
                        <option value="DAE">DAE</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Select your specialization
                    </Form.Label>
                    <Form.Select>
                        <option>Select from the list of specializations</option>
                        <option value="none">None</option>
                        <option value="IS">User experience engineering</option>
                        <option value="DAE">Data Analytics Engineering</option>
                    </Form.Select>
                </Form.Group>

                <Form.Label>
                    <h3>Documents</h3>
                </Form.Label>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Statement Of Purpose</Form.Label>
                    <Form.Control name='sop' type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Letter Of Recommendation 1</Form.Label>
                    <Form.Control name='lor1' type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Letter Of Recommendation 2</Form.Label>
                    <Form.Control name='lor2' type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Letter Of Recommendation 3</Form.Label>
                    <Form.Control name='lor3' type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Resume</Form.Label>
                    <Form.Control name='resume' type="file"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
