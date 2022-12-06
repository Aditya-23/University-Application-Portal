import React from 'react';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logoutUser} from '../actions/auth';

function Navbar(props) {


    const onLogout = () => {
        props.logoutUser();
    }


    return (
      <>
            {props.auth.isAuthenticated
                ? <div className='topnav'> <div className='logo_styles'>
                    <img src={require("../static/uniicon.ico")} className="img_style" />
                    <p className="name_style">University Application</p>
                </div> <form className = 'search_bar_wrap' > <input
                    className='search_bar'
                    type="text"
                    placeholder='Search University'
                    size="40"/> < input className = 'search_bar' type = "submit" value = "Search" /> </form>
                    <a onClick = {() => onLogout()} > Logout </a>
                </div>
                : <div className='topnav'>
                  <div className='logo_styles'>
                    <img src={require("../static/uniicon.ico")} className="img_style" />
                    <p className="name_style">University Application</p>
                  </div>
                    <div className='log_out_nav'> 
                      <a href='/login' className='login_style'>Login</a> 
                      <a href = '/register' className='sign_up_style'> SignUp </a>
                    </div>
                  </div>
              }
</>
    )
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}

export default connect(mapStateToProps, {logoutUser})(Navbar);