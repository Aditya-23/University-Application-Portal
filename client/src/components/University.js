import React from 'react';
import {connect} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';

const token = localStorage.getItem("token");
function University(props) {

    const navigate = useNavigate();


    return ( <> <h1>University</h1> 
    <button onClick={() => navigate("/application")}>Click</button></>
  );
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps, null)(University);