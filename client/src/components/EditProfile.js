import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import {connect} from 'react-redux';

function EditProfile(props) {

    const [editProfile, setEditProfile] = useState({
        name: ""
    });

    const onChangeHandler = (e) => {
        setEditProfile((editProfile) => {
            return ({
                ...editProfile,
                [e.target.name]: e.target.value
            })
        })
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
                        name='createdBy'
                        onChange={e => onChangeHandler(e)}
                        type="text"
                        placeholder="Enter full name as per your passport"
                        defaultValue={props.auth.user.name}
                        required/>
                </Form.Group>
            </Form>
        </div>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}
export default connect(mapStateToProps, null)(EditProfile);