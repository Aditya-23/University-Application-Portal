import React from "react";
import { connect } from "react-redux";
import { startUniversityLoad } from "../../actions/universities";
import { useNavigate } from "react-router-dom";
import ApplicationSection from "./ApplicationSection.js";
import UniversitySection from "./TopUniversitySection.js";
import { Button } from "react-bootstrap";
import { getApplication } from "../../actions/application";
import { loadUser } from "../../actions/auth";

function Dashboard(props) {
  const navigate = useNavigate();

  if (props.auth.loading) {
    return <h1>Loading</h1>;
  }
  const onClickHandler = async () => {
    await props.startUniversityLoad("638c043031111c396dc2bad7");
    navigate("/university");
  };

  const onClickApplicationHandler = async () => {
    await props.loadUser();
    await props.getApplication("638cf137f6096b0f8bd91319");
    navigate("/application");
  }


  return (
    <>
      <h3>Welcome, {props.auth.user.name}</h3>
      <p>Get started with your study aborad journey by editing your profile here : <Button variant="success" onClick={() => navigate("/edit-profile")}> Edit Profile </Button> </p>
      <UniversitySection />
      <ApplicationSection />
      <button onClick={() => onClickHandler()}>Click here</button>{" "}
      <button onClick={() => onClickApplicationHandler()}>Click here 1</button>{" "}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { startUniversityLoad, getApplication, loadUser })(Dashboard);
