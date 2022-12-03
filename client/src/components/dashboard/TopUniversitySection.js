import "../../styles/main.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { startUniversityLoad } from "../../actions/universities";
import { useGetUniversitiesQuery } from "../../api/uniTemp.js";

function UniversityCard(props) {
  const navigate = useNavigate();
  const uniLoadHandler = () => {
    console.log("uniLoadHandler", props.id);
    props.startUniversityLoad(props.id);
    navigate("/university");
  };

  var card = (
    <li className="cards__item">
      <Card bg="Primary">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <div onClick={() => uniLoadHandler()}>
            <Card.Title> {props.name} </Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </div>
          <Button variant="primary">Shortlist Uni</Button>
        </Card.Body>
      </Card>
    </li>
  );
  return card;
}

function UniversitySection(props) {
  const {
    data: Universities,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUniversitiesQuery();

  var items = [];
  if (isLoading) {
    items = <p>Loading...</p>;
  } else if (isSuccess) {
    items = Universities.map((uni) => (
      <UniversityCard
        key={uni._id}
        id={uni._id}
        name={uni.name}
        description={uni.description}
        startUniversityLoad={props.startUniversityLoad}
      />
    ));
  } else if (isError) {
    items = <p>Loading</p>;
  }

  return (
    <div className="dashboardSection PopUniversity">
      <h2 className="title">Top Universities</h2>
      <ul className="cardsList">{items}</ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { startUniversityLoad })(
  UniversitySection
);

// export default UniversitySection;
