import "../styles/main.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function UniversityCard() {
  var card = (
    <li class="cards__item">
      <Card bg="Primary" style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </li>
  );
  return card;
}

function UniversitySection() {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<UniversityCard />);
  }
  return (
    <div className="dashboardSection PopUniversity">
      <h2 className="title">Top Universities</h2>
      <ul className="cardsList">{items}</ul>
      {/* <UniversityCard /> */}
    </div>
  );
}

export default UniversitySection;
