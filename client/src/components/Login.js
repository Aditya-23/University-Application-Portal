import React from 'react';
import Navbar from './Navbar';
import {useState} from 'react';
import {connect} from 'react-redux';
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
        console.log("Invoked")
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
        <div className="login-wrap">
            <h2>Welcome, Sign In here</h2>

            <form className="form" onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="Email" onChange={e => onChangeHandler(e)} name="email" value={loginForm.email}/>
                <input type="password" placeholder="Password" onChange={e => onChangeHandler(e)} name="password" value={loginForm.password}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);