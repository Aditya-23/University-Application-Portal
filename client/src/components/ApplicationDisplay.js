import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import PersonalInformation from './PersonalInformation';

function ApplicationDisplay() {
  return (
    <div className='application-container'>
        <Form.Label><h4>Your Application Summary</h4></Form.Label>
        <PersonalInformation /> 
    </div>
  );
}

export default connect(null, null)(ApplicationDisplay);
