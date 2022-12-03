import React, {useEffect, useState, ReactDOM} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {updateProfile} from '../actions/auth';
import Education from './Education';
import Experience from './Experience';

function EditProfile(props) {

    const navigate = useNavigate();

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

    const [experience,
        setExperience] = useState({
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        currentWorkFlag: false,
        description: ""
    })

    const [showEducationForm,
        setShowEducationForm] = useState(false);

    const [showExperienceForm,
        setShowExperienceForm] = useState(false);

    const [showAddEducationButton,
        setShowAddEducationButton] = useState(true)

    const [showAddExperienceButton,
        setShowAddExperienceButton] = useState(true)

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

    const onExperienceChangeHandler = (e) => {
        setExperience((experience) => {
            return ({
                ...experience,
                [e.target.name]: e.target.value
            })
        })
    }

    const addEducationToState = (e) => {
        e.preventDefault();
        setEditProfile({
            ...editProfile,
            education: [
                ...editProfile.education,
                education
            ]
        });
        setShowEducationForm(false);
        setShowAddEducationButton(true);
        setEducation({university: "", degree: "", gpa: 0.0, specialization: ""});
    }

    const addExperienceToState = (e) => {
        e.preventDefault();
        setEditProfile({
            ...editProfile,
            experience: [
                ...editProfile.experience,
                experience
            ]
        });
        setShowExperienceForm(false);
        setShowAddExperienceButton(true);
        setExperience({
            companyName: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            currentWorkFlag: false,
            description: ""
        });
    }

    const openEducationForm = () => {
        setShowEducationForm(true);
        setShowAddEducationButton(false);
    }

    const removeEducationForm = () => {
        setShowAddEducationButton(true);
        setShowEducationForm(false);
        setEducation({university: "", degree: "", gpa: 0.0, specialization: ""});
    }

    const openExperienceForm = () => {
        setShowAddExperienceButton(false);
        setShowExperienceForm(true);
    }

    const removeExperienceForm = () => {
        setShowAddExperienceButton(true);
        setShowExperienceForm(false);
    }

    const finalSaveProfile = async (e) => {
        e.preventDefault();
        await props.updateProfile(props.auth.user._id, editProfile);
        navigate("/dashboard");
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

                <Education educationList={editProfile.education}/> {showAddEducationButton
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
                <Form.Label>
                    <h3>Experience</h3>
                </Form.Label>

                <Experience experienceList={editProfile.experience} onChangeHandler/> {showAddExperienceButton
                    ? <Button variant='success' onClick={() => openExperienceForm()}>Add experience</Button>
                    : null
}

                {showExperienceForm
                    ? <Form.Group className="mb-3">
                            <Form.Label>
                                <h5>
                                    Add experience here
                                </h5>
                            </Form.Label>
                            <br/>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                name='companyName'
                                onChange={e => onExperienceChangeHandler(e)}
                                type="text"/>
                            <br></br>
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                name='jobTitle'
                                onChange={e => onExperienceChangeHandler(e)}
                                type="text"/>
                            <br></br>
                            <Form.Label>Start date</Form.Label>
                            <Form.Control
                                name='startDate'
                                onChange={e => onExperienceChangeHandler(e)}
                                type="date"/>
                            <br></br>
                            <Form.Check type="checkbox" id="default-checbox" onChange={(e) => setExperience({...experience, currentWorkFlag: e.target.checked})} label="Currently working in this company"/>
                            <br></br>
                            <Form.Label>End date</Form.Label>
                            <Form.Control
                                name='endDate'
                                onChange={e => onExperienceChangeHandler(e)}
                                type="date"
                                disabled={experience.currentWorkFlag}/>
                            <br></br>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name='description'
                                onChange={e => onExperienceChangeHandler(e)}
                                type="text"/>
                            <br></br>
                            <Row>
                                <Col>
                                    <Button
                                        type='submit'
                                        variant='success'
                                        onClick={(e) => addExperienceToState(e)}>Add</Button>
                                    <Button variant='danger' onClick={() => removeExperienceForm()}>Cancel</Button>
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