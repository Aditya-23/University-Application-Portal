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
            <div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <label>Email Address</label>
                    <input type="text" name='email' value={loginForm.email} placeholder="Enter email" onChange={(e) => onChangeHandler(e)}/>
                    <br></br>
                    <label>Password</label>
                    <input text="password" name='password' value={loginForm.password} placeholder="Enter password" onChange={(e) => onChangeHandler(e)}/>
                    <br></br>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
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