import React, { Fragment, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
import { getUniversityById } from '../actions/universities';


function University(props) {


    const navigate = useNavigate();

    //DONT put a function inside useEffect, directly write statements that you want to invoke after rendering
    useEffect(() => {
        props.getUniversityById(props.university.id);
    }, []);

    return (
       <>
       </>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
        university: state.universityReducer,
    }
}

const mapDispatchToProps = {
    getUniversityById
}

export default connect(mapStateToProps, mapDispatchToProps)(University);