import React from 'react';
import Navbar from './Navbar';
import {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from "../actions/auth";
import {Fragment, Spinner} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { removeAlert } from '../actions/alert';

function Login(props) {

    const navigate = useNavigate();
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

    if(props.auth.isAuthenticated){
        navigate("/dashboard");
    }

    const closeAlert = async() => {
        await props.removeAlert();
    }

    return (
        <div className="login-wrap">
            {props.alert.msg != null
                ? <div className="alert">
                        <span className="closebtn" onClick={() => closeAlert()}>&times;</span>
                        {props.alert.msg}
                    </div>
                : null}
            <h2>Welcome, Sign In here</h2>

            <form className="form" onSubmit={e => onSubmit(e)}>
                <input
                    type="text"
                    required
                    placeholder="Email"
                    onChange={e => onChangeHandler(e)}
                    name="email"
                    value={loginForm.email}/>
                <input
                    type="password"
                    required
                    placeholder="Password"
                    onChange={e => onChangeHandler(e)}
                    name="password"
                    value={loginForm.password}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer, alert: state.alertReducer}
}

const mapDispatchToProps = {
    loginUser,
    removeAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);