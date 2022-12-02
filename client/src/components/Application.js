import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {applicationFormSave} from '../actions/application.js';

function Application(props) {

    const [applicationForm,
        setApplicationForm] = useState({
        createdBy: null,
        createByEmail: null,
        gender: null,
        dateOfBirth: null,
        applyingTo: null,
        semIntake: null,
        programName: null,
        specialization: null,
        lor1: null,
        lor2: null,
        lor3: null,
        sop: null,
        resume: null
    });

    const [sop,
        setsop] = useState({preview: "", data: ""});

    const [lor1,
        setlor1] = useState({preview: "", data: ""});

    const [lor2,
        setlor2] = useState({preview: "", data: ""});

    const [lor3,
        setlor3] = useState({preview: "", data: ""});

    const [resume,
        setresume] = useState({preview: "", data: ""});

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        console.log("INVOKED HERERREE");
        const filesUploaded = {
            sop,
            lor1,
            lor2,
            lor3,
            resume
        }
        await props.applicationFormSave(applicationForm, filesUploaded, "submitted");
    }

    const onChangeHandler = (e) => {
        setApplicationForm((applicationForm) => {
            return ({
                ...applicationForm,
                [e.target.name]: e.target.value
            })
        })
    }

    const onFileChange = (e) => {
        var changedFile;
        if (e.target.files.length == 0) {
            changedFile = {
                preview: "",
                data: ""
            }
        } else {
            changedFile = {
                preview: URL.createObjectURL(e.target.files[0]),
                data: e.target.files[0]
            }
        }
        switch (e.target.name) {
            case "sop":
                setsop(changedFile);
                break;

            case "lor1":
                setlor1(changedFile);
                break;

            case "lor2":
                setlor2(changedFile);
                break;

            case "lor3":
                setlor3(changedFile);
                break;

            case "resume":
                setresume(changedFile);
                break;

            default:
                break;
        }

    }

    return (
        <div className='application-container'>
            <Form encType='multipart/form-data' onSubmit={(e) => onSubmitHandler(e)}>
                <Form.Label>
                    <h3>Personal Information</h3>
                </Form.Label>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        name='createdBy'
                        onChange={e => onChangeHandler(e)}
                        type="text"
                        placeholder="Enter full name as per your passport"
                        required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name='createByEmail'
                        type="email"
                        onChange={e => onChangeHandler(e)}
                        placeholder="Enter your personal email"
                        required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Select name='gender' onChange={e => onChangeHandler(e)} required>
                        <option>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        name='dateOfBirth'
                        onChange={e => onChangeHandler(e)}
                        type="date"
                        required/>
                </Form.Group>

                <Form.Label>
                    <h3>University Information</h3>
                </Form.Label>

                <Form.Group className="mb-3">
                    <Form.Label>Applying to
                    </Form.Label>
                    <Form.Control
                        name='applyingTo'
                        type="text"
                        onChange={e => onChangeHandler(e)}
                        value={"Northeastern"}
                        disabled/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Semester Intake
                    </Form.Label>
                    <Form.Select name='semIntake' onChange={e => onChangeHandler(e)} required>
                        <option>Select from the list of programs</option>
                        <option value="spring 2023">Spring 2023</option>
                        <option value="fall 2023">Fall 2023</option>
                        <option value="spring 2024">Spring 2024</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Select your program
                    </Form.Label>
                    <Form.Select name='programName' onChange={e => onChangeHandler(e)} required>
                        <option>Select from the list of programs</option>
                        <option value="SES">SES</option>
                        <option value="IS">IS</option>
                        <option value="DAE">DAE</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Select your specialization
                    </Form.Label>
                    <Form.Select name='specialization' onChange={e => onChangeHandler(e)} required>
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
                    <Form.Control name='sop' onChange={e => onFileChange(e)} type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Letter Of Recommendation 1</Form.Label>
                    <Form.Control name='lor1' onChange={e => onFileChange(e)} type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Letter Of Recommendation 2</Form.Label>
                    <Form.Control name='lor2' onChange={e => onFileChange(e)} type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Letter Of Recommendation 3</Form.Label>
                    <Form.Control name='lor3' onChange={e => onFileChange(e)} type="file"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Resume</Form.Label>
                    <Form.Control name='resume' onChange={e => onFileChange(e)} type="file"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

const mapStateToProps = state => {
    return {application: state.applicationReducer}
}

const mapDispatchToProps = {
    applicationFormSave
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
