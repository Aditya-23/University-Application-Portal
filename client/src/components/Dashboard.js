import React from "react";
import { connect } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { startUniversityLoad } from "../actions/universities";
import ApplicationSection from "./ApplicationSection.js";
import UniversitySection from "./TopUniversitySection.js";
import store from "../store";

function Dashboard(props) {
  const navigate = useNavigate();

  if (props.auth.loading) {
    return <h1>Loading</h1>;
  }
  const onClickHandler = async () => {
    await props.startUniversityLoad("6386a6757c2ac332f66c643e");
    navigate("/university");
  };

  return (
    <>
      {" "}
      <h1>Dashboard</h1>
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
