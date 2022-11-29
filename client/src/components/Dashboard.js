import React from 'react';
import {connect} from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


function Dashboard(props) {
    const navigate = useNavigate();
    if(props.auth.loading){
        return (
            <h1>Loading</h1>
        )
    }
    return ( <> <h1>Dashboard</h1>
    <button onClick={() => navigate("/university")} >Click here</button> </>
  );
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
    }
}


export default connect(mapStateToProps, null) (Dashboard);