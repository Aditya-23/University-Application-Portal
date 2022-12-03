import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import AddEducationForm from './AddEducationForm';
import Education from './Education';

function EditProfile(props) {

    const [editProfile,
        setEditProfile] = useState({
        name: "",
        gender: "",
        email: "",
        phone: "",
        education: [...props.auth.user.education],
        experience: [...props.auth.user.experience],
        greScore: "",
        toeflScore: "",
        ieltsScore: ""
    })

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

    const educationFormHandler = () => {
        setShowEducationForm(true);
        setShowAddEducationButton(false);
    }

    const removeEducationFormHandler = () => {
        setShowAddEducationButton(true);
        setShowEducationForm(false);
    }

    return (
        <div className='application-container'>
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

                <Education onChangeHandler/> 
                
                {showAddEducationButton
                    ? <Button variant='success' onClick={() => educationFormHandler()}>Add education</Button>
                    : null
                }

                {showEducationForm
                    ? <AddEducationForm/>
                    : null
                }

                {showEducationForm ? <Button variant='danger' onClick={() => removeEducationFormHandler()}>Cancel</Button> : null}
            </Form>
        </div>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}
export default connect(mapStateToProps, null)(EditProfile);