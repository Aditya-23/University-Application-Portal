import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../actions/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { connect } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BookmarkHeart, BookmarkHeartFill } from "react-bootstrap-icons";

function UniversityCard(props) {
    const navigate = useNavigate();

    const auth = useSelector(state => state.authReducer);
    // useEffect(() => {
    // }, [auth]);
    var shortlistedUniversities = [...auth.user.shortlistedUniversities];

    var isShortListed = shortlistedUniversities.includes(props.id);

    const navToUniHandler = () => {
        console.log("uniLoadHandler", props.id);
        props.startUniversityLoad(props.id);
        navigate("/university");
    };

    const shortlistHandler = e => {
        e.preventDefault();
        // console.log("shortlistHandler", props.id);
        var shortlistedUniversities = [...auth.user.shortlistedUniversities];
        // console.log("shortlistHandler UniShortlist", shortlistedUniversities);
        // add to shortlist if not shortlisted
        if (!isShortListed) {
            console.log("shortlistHandler add", props.id);
            shortlistedUniversities.push(props.id);
        } else {
            console.log("shortlistHandler remove", props.id);
            shortlistedUniversities = shortlistedUniversities.filter(
                uni => uni !== props.id
            );
        }
        const user = auth.user;
        shortlistedUniversities = [...new Set(shortlistedUniversities)];
        props.updateProfile(auth.user._id, { ...user, shortlistedUniversities });
    };
    // < i class="bi bi-bookmark-heart" ></i >
    // <i class="bi bi-bookmark-heart-fill"></i>
    var shortlistedIcon = shortlistedUniversities.includes(props.id) ? (
        // <FaStar />
        <BookmarkHeartFill />
    ) : (
        // <FaRegStar />
        <BookmarkHeart />
    );

    var card = (
        <li className="cards__item">
            <Card bg="Primary">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <div onClick={() => navToUniHandler()}>
                        <Card.Title> {props.name} </Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </div>
                    <div className="shortlistIcon" onClick={shortlistHandler}>
                        {shortlistedIcon}
                    </div>
                    {/* <Button variant="primary" onClick={shortlistHandler}>
                        Shortlist Uni
                    </Button> */}
                </Card.Body>
            </Card>
        </li>
    );
    return card;
}

export default connect(null, { updateProfile })(UniversityCard);
// export default UniversityCard;
