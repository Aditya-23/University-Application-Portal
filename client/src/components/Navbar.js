import React from 'react';
import {connect} from 'react-redux';

function Navbar(props) {

    return (
        <div class="topnav">
            {props.auth.isAuthenticated
                ? <>
                <form>
                  <input type="text" placeholder='Search University' />
                </form>
                <a>Logout</a>
                </>
                : <> <a href='/login'>Login</a> < a href='/register'> SignUp </a>
            </ >
}
        </div>
    )
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}

export default connect(mapStateToProps, null)(Navbar);