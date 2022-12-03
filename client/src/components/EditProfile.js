import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import { updateProfile } from '../actions/auth';
import Education from './Education';

function EditProfile(props) {

    const [editProfile,
        setEditProfile] = useState({
        name: props.auth.user.name,
        gender: props.auth.user.gender,
        email: props.auth.user.email,
        phone: props.auth.user.phone,
        education: props.auth.user.education,
        experience: props.auth.user.experience,
        greScore: props.auth.user.greScore,
        toeflScore: props.auth.user.toeflScore,
        ieltsScore: props.auth.user.ieltsScore
    })

    const [education,
        setEducation] = useState({university: "", degree: "", gpa: 0.0, specialization: ""});

    const [showEducationForm,
        setShowEducationForm] = useState(false);

    const [showExperienceForm,
        setShowExperienceForm] = useState(false);

    const [showAddEducationButton,
        setShowAddEducationButton] = useState(true)

    const onChangeHandler = (e) => {
        setEditProfile((editProfile) => {
            return ({
                ...editProfile,
                [e.target.name]: e.target.value
            })
        })
    }

    const onEducationChangeHandler = (e) => {
        setEducation((education) => {
            return ({
                ...education,
                [e.target.name]: e.target.value
            })
        })
    }

    const addEducationToState = (e) => {
        e.preventDefault();
        setEditProfile({
            ...editProfile,
            education: [...editProfile.education, education]
        });
        setShowEducationForm(false);
        setShowAddEducationButton(true);
        setEducation({university: "", degree: "", gpa: 0.0, specialization: ""});
    }

    const removeEducationForm = () => {
        setShowAddEducationButton(true);
        setShowEducationForm(false);
        setEducation({university: "", degree: "", gpa: 0.0, specialization: ""});
    }

    const openEducationForm = () => {
        setShowEducationForm(true);
        setShowAddEducationButton(false);
    }

    const finalSaveProfile = (e) => {
        e.preventDefault();
        props.updateProfile(props.auth.user.userId, editProfile);
    }

    return (
        <div className='application-container'>
            {console.log(editProfile)}
            <Form>
                <Form.Label>
                    <h3>Personal Information</h3>
                </Form.Label>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        name='name'
                        onChange={e => onChangeHandler(e)}
                        type="text"
                        defaultValue={props.auth.user.name}
                        required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name='email'
                        onChange={e => onChangeHandler(e)}
                        type="text"
                        defaultValue={props.auth.user.email}
                        required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        name='createdBy'
                        onChange={e => onChangeHandler(e)}
                        type="text"
                        placeholder="Enter full name as per your passport"
                        defaultValue={props.auth.user.phone}
                        required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name='gender' onChange={e => onChangeHandler(e)} required>
                        <option>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </Form.Group>
                <br></br>
                <Form.Label>
                    <h3>Education</h3>
                </Form.Label>

                <Education educationList={editProfile.education} onChangeHandler/> 
                
                {showAddEducationButton
                    ? <Button variant='success' onClick={() => openEducationForm()}>Add education</Button>
                    : null
                }


                {showEducationForm
                    ? <Form.Group className="mb-3">
                            <Form.Label>
                                <h5>
                                    Add education here
                                </h5>
                            </Form.Label>
                            <br/>
                            <Form.Label>University</Form.Label>
                            <Form.Control
                                name='university'
                                onChange={e => onEducationChangeHandler(e)}
                                type="text"
                                placeholder="Enter full name as per your passport"/>
                            <br></br>
                            <Form.Label>Degree</Form.Label>
                            <Form.Control
                                name='degree'
                                onChange={e => onEducationChangeHandler(e)}
                                type="text"
                                placeholder="Enter full name as per your passport"/>
                            <br></br>
                            <Form.Label>GPA</Form.Label>
                            <Form.Control
                                name='gpa'
                                onChange={e => onEducationChangeHandler(e)}
                                type="text"
                                placeholder="Enter full name as per your passport"/>
                            <br></br>
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control
                                name='specialization'
                                onChange={e => onEducationChangeHandler(e)}
                                type="text"
                                placeholder="Enter full name as per your passport"/>
                            <br></br>
                            <Row>
                                <Col>
                                    <Button type='submit' variant='success' onClick={(e) => addEducationToState(e)}>Add</Button>
                                    <Button variant='danger' onClick={() => removeEducationForm()}>Cancel</Button>
                                </Col>
                            </Row>

                        </Form.Group>
                    : null}

                    
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            <Button type='submit' variant='success' onClick={(e) => finalSaveProfile(e)}>Save Profile</Button>
                        </Col>
                    </Row>
                    
            </Form>
        </div>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}
export default connect(mapStateToProps, {updateProfile})(EditProfile);