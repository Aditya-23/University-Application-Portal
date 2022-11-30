import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ApplicationSection from "./ApplicationSection.js";
import UniversitySection from "./TopUniversitySection.js";

function Dashboard(props) {
  if (props.auth.loading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      {" "}
      <h1>Dashboard</h1>
      <UniversitySection />
      <ApplicationSection />
      <button onClick={() => Navigate("/university")}>Click here</button>{" "}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
