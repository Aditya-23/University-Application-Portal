import React from 'react';
import {connect} from 'react-redux';

function Navbar(props) {

  const onLogout = () => {

  }

    return (
        <div class="topnav">
            {props.auth.isAuthenticated
                ? <> <div onClick={() => onLogout()}>
                      <h1>Logout</h1>
                    </div> 
                <form className = 'search_bar_wrap' > <input
                    className='search_bar'
                    type="text"
                    placeholder='Search University'
                    size="40"/> < input className = 'search_bar' type = "submit" value = "Search" /> </form> < a > Logout </a>
                </>
                : <> <a href='/login'>Login</a> < a href = '/register' > SignUp </a>
            </ >
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}

export default connect(mapStateToProps, null)(Navbar);