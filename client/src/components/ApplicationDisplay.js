import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import PersonalInformation from './PersonalInformation';

function ApplicationDisplay(props) {
    const [userInformation, setuserInformation] = useState(props.auth.user);
  return (
    <div className='application-container'>
        <Form.Label><h4>Your Application Summary</h4></Form.Label>
        <br></br>
        <PersonalInformation userInformation={userInformation}/> 
    </div>
  );
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
        application: state.applicationReducer,
    }
}

export default connect(mapStateToProps, null)(ApplicationDisplay);
