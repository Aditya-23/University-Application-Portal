import React from 'react';
import Navbar from './Navbar';
import {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from "../actions/auth";
import {Fragment, Spinner} from "react";
import {Navigate} from "react-router-dom";
import { removeAlert } from '../actions/alert';

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

    const closeAlert = async() => {
        await props.removeAlert();
    }


    return (

        <><div class="container4" id="container4">   
            <div class="form-container sign-in-container">
            {props.alert.msg != null
                    ? <div class="alert">
                        <span class="closebtn" onClick={() => closeAlert()}>&times;</span>
                        {props.alert.msg}
                    </div>
                    : null}
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <h1>Welcome, Sign in here</h1>
                    <input className="email" type="text" placeholder="Email" onChange={e => onChangeHandler(e)} name="email" value={loginForm.email} />
                    <input className="password" type="password" placeholder="Password" onChange={e => onChangeHandler(e)} name="password" value={loginForm.password} />
                    <input className="login-btn" type="submit" value="Sign In" />
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Hello Student!</h1>
                        <p>Enter your details and start your application journey with us</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        
            </>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer, alert: state.alertReducer}
}

const mapDispatchToProps = {
    loginUser,
    removeAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);