import React from 'react';
import {connect} from 'react-redux';

function Navbar(props) {

    return (
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}

export default connect(mapStateToProps, null)(Navbar);