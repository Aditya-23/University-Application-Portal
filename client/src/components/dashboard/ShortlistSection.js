import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUniversitiesByIdsQuery } from "../../api/uniApi.js";
import UniversityCard from "./UniCard.js";
import { connect } from "react-redux";
import { startUniversityLoad } from "../../actions/universities";

function ShortlistSection(props) {
    const auth = useSelector(state => state.authReducer);
    useEffect(() => {
        const shortlistedIds = auth.user.shortlistedUniversities;
        console.log(shortlistedIds);
    }, [auth]);
    // TODO: shortlistedIds failing on first render returned empty
    const shortlistedIds = auth.user.shortlistedUniversities;
    const {
        data: Universities,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUniversitiesByIdsQuery(shortlistedIds);
    var items = [];
    if (isLoading) {
        items = <p>Loading...</p>;
    } else if (isSuccess) {
        // TODO: Handle how to show when no shortlisted universities
        console.log("Load Successful", Universities);
        items = Universities.map(uni => (
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
        <div>
            <h3>Shortlist Section</h3>
            <h2 className="title">Top Universities</h2>
            <ul className="cardsList">{items}</ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
    };
};

export default connect(mapStateToProps, { startUniversityLoad })(ShortlistSection);
