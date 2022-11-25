import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import { connect } from 'react-redux';
import {loginUser} from "../actions/auth";
import {Fragment, Spinner} from "react";
import {Navigate} from "react-router-dom";


function Login(props) {

    const [loginForm,
        setloginForm] = useState({email: "", password: ""})

    const onChangeHandler = (e) => {
        setloginForm((form) => {
            return ({
                ...form,
                [e.target.name]: e.target.value
            })
        })
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await props.loginUser(loginForm);
    }

    if (props.auth.loading) {
        return (
            <Fragment>
                <h1>Loading</h1>
            </Fragment>
        )
    }

    if (props.auth.isAuthenticated) {
        return (<Navigate to="/dashboard"/>)
    }
    return ( 
        <>
            
        </>
  );
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
    }
}

const mapDispatchToProps = {
    loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);