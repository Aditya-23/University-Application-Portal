import { applyPatches } from "immer";
import { useEffect, useState } from "react";
import { useGetApplicationsByStudentIdQuery } from "../../api/applicationApi";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";

const AppplicationStatus = ["Pending", "In Review", "Accepted", "Rejected"];

function ApplicationCard({ Application }) {
    return (
        <div>
            {Application._id}
            {Application.applicationStatus}
        </div>
    );
}

function ApplicationSelector({ statusFilter, setStatusFilter }) {
    // refresh Section when statusFilter changes
    useEffect(() => {}, [statusFilter]);
    function handleSelect(e) {
        setStatusFilter(e);
    }

    const AllItem = (
        <Dropdown.Item key="All" eventKey="All">
            All
        </Dropdown.Item>
    );
    var selectorContent = AppplicationStatus.map(status => (
        <Dropdown.Item key={status} eventKey={status}>
            {status}
        </Dropdown.Item>
    ));

    return (
        <div>
            {/* <p>Filter Applications:</p> */}
            <DropdownButton
                id="dropdown-basic-button"
                onSelect={handleSelect}
                title={statusFilter}
            >
                <Dropdown.Menu>
                    {AllItem}
                    {selectorContent}
                </Dropdown.Menu>
            </DropdownButton>
        </div>
    );
}

function ApplicationSection() {
    // get studentId from auth
    const auth = useSelector(state => state.authReducer);
    const studentId = auth.user._id;
    const {
        data: Applications,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetApplicationsByStudentIdQuery(studentId);
    // useGetApplicationsByStudentIdQuery("6382996e0b0d5cc4eccec77c");
    // var statusFilter = "all";
    const [statusFilter, setStatusFilter] = useState("All");

    var items = [];
    // refresh Section when statusFilter changes
    useEffect(() => {}, [statusFilter]);
    if (isLoading) {
        items = <p>Loading...</p>;
    } else if (isSuccess) {
        if (AppplicationStatus.includes(statusFilter)) {
            items = Applications.filter(
                Application => Application.applicationStatus === statusFilter
            ).map(Application => (
                <ApplicationCard key={Application._id} Application={Application} />
            ));
        } else {
            items = Applications.map(Application => (
                <ApplicationCard key={Application._id} Application={Application} />
            ));
        }
    } else if (isError) {
        items = <p>Loading</p>;
    }

    return (
        <div>
            <h2>Applications</h2>
            <ApplicationSelector
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
            />
            <ul>{items}</ul>
        </div>
    );
}

export default ApplicationSection;
