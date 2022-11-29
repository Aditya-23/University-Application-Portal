import React from 'react';
import {connect} from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { startUniversityLoad } from '../actions/universities';
import store from '../store';



function Dashboard(props) {
    const navigate = useNavigate();

    if(props.auth.loading){
        return (
            <h1>Loading</h1>
        )
    }
    const onClickHandler = async() => {
        await props.startUniversityLoad("63869b3066f1b3a566d37e03");
        navigate("/university")
    }

    return ( <> <h1>Dashboard</h1>
    <button onClick={() => onClickHandler()} >Click here</button> </>
  );
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
    }
}


export default connect(mapStateToProps, {startUniversityLoad}) (Dashboard);