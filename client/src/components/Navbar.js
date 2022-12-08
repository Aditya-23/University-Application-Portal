import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/auth";

function Navbar(props) {
  const onLogout = () => {
    props.logoutUser();
  };

  return (
    <>
      {props.auth.isAuthenticated ? (
        <>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
          {/* <link rel="stylesheet" href="./style.css" /> */}
          <div className="topnav">
            {" "}
            <div className="logo_styles">
              <a href="/">
                <img
                  src={require("../static/uniicon.ico")}
                  className="img_style"
                />
              </a>
              <p className="name_style">University Application</p>
            </div>{" "}
            <form className="search_bar_wrap">
              {" "}
              <input
                id="searchBar"
                className="searchbar"
                type="text"
                placeholder="Search..."
              />
              <a id="btnSearch" className="btn-search">
                <i className="fa fa-search"></i>
              </a>{" "}
            </form>
            <a onClick={() => onLogout()} className="logout-style">
              {" "}
              Log Out{" "}
            </a>
          </div>
        </>
      ) : (
        <div className="topnav">
          <div className="logo_styles">
            <a href="/">
              <img
                src={require("../static/uniicon.ico")}
                className="img_style"
              />
            </a>{" "}
            <p className="name_style">University Application</p>
          </div>
          <div className="log_out_nav">
            <a href="/login" className="login_style">
              Login
            </a>
            <a href="/register" className="sign_up_style">
              {" "}
              SignUp{" "}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.authReducer };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);
