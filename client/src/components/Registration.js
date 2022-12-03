import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {setAlert, removeAlert} from '../actions/alert';
import {registerUser} from '../actions/auth';

function Registration(props) {
    const [registrationForm,
        setRegistrationForm] = useState({email: "", password: "", retypePassword: "", phone: "", name: ""});

    const onChangeHandler = (e) => {
        setRegistrationForm((form) => {
            return ({
                ...form,
                [e.target.name]: e.target.value
            })
        })
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if (registrationForm.password != registrationForm.retypePassword) {
            props.setAlert("Passwords do not match!", "danger");
        } else {
            await props.registerUser(registrationForm);
        }
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
        <div className="login-wrap">
            {props.alert.msg != null
                ? <div className="alert">
                        <span className="closebtn" onClick={() => closeAlert()}>&times;</span>
                        {props.alert.msg}
                    </div>
                : null}

            <h2>Welcome, Sign Up here</h2>

            <form className="form" onSubmit={e => onSubmit(e)}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={e => onChangeHandler(e)}
                    name="name"
                    required
                    value={registrationForm.name}/>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={e => onChangeHandler(e)}
                    name="email"
                    required
                    value={registrationForm.email}/>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={e => onChangeHandler(e)}
                    name="password"
                    required
                    value={registrationForm.password}/>
                <input
                    type="password"
                    placeholder="Retype password"
                    onChange={e => onChangeHandler(e)}
                    name="retypePassword"
                    required
                    value={registrationForm.retypePassword}/>
                <input
                    type="text"
                    placeholder="Phone"
                    onChange={e => onChangeHandler(e)}
                    name="phone"
                    required
                    value={registrationForm.phone}/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer, alert: state.alertReducer}
}

const mapDispatchToProps = {
    registerUser,
    setAlert,
    removeAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
