import React from 'react';
import {connect} from 'react-redux';

function Navbar(props) {

    return (
        <h1>
          Navbar
        </h1>
    )
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}

export default connect(mapStateToProps, null)(Navbar);