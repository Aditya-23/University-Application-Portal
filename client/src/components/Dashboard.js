import React from "react";
import { connect } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { startUniversityLoad } from "../actions/universities";
import ApplicationSection from "./ApplicationSection.js";
import UniversitySection from "./TopUniversitySection.js";
import store from "../store";
import { Button } from "react-bootstrap";

function Dashboard(props) {
  const navigate = useNavigate();

  if (props.auth.loading) {
    return <h1>Loading</h1>;
  }
  const onClickHandler = async () => {
    await props.startUniversityLoad("63869b3066f1b3a566d37e03");
    navigate("/university");
  };


  return (
    <>
      {" "}
      <h3>Welcome, {props.auth.user.name}</h3>
      <h5>Get started with your study aborad journey by editing your profile here : <Button variant="success" onClick={() => navigate("/edit-profile")}> Edit Profile </Button> </h5>
      <UniversitySection />
      <ApplicationSection />
      <button onClick={() => onClickHandler()}>Click here</button>{" "}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { startUniversityLoad })(Dashboard);
