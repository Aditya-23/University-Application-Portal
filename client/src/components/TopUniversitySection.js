import "../styles/main.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useGetUniversitiesQuery } from "../api/uniTemp.js";

function UniversityCard(props) {
  var card = (
    <li className="cards__item">
      <Card bg="Primary">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Shortlist Uni</Button>
        </Card.Body>
      </Card>
    </li>
  );
  return card;
}

function UniversitySection() {
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
        name={uni.name}
        description={uni.description}
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

export default UniversitySection;
