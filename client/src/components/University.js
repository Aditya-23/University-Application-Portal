import React, { Fragment, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
import { getUniversityById } from '../actions/universities';


function University(props) {


    const navigate = useNavigate();

    //DONT put a function inside useEffect, directly write statements that you want to invoke after rendering
    useEffect(() => {
        props.getUniversityById("63866072a0edb9867a606043");
    }, []);

    return (
        <Fragment>
            <h1>university</h1>
            <img src={props.university.imgURL} alt="Cannot display"/>
            {console.log(props.university.university)}
        </Fragment>
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