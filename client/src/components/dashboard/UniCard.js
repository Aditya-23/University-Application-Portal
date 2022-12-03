import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

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

export default UniversityCard;
