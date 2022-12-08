import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function ProgramList(props) {

    const [hidden, setHidden] = useState(true);
    const [currentProgram, setCurrentProgram] = useState({
        courseName: "",
        credits: "",
        specializations: [],
        description: ""
    });

    const showDetails = (program) => {
        setCurrentProgram(program);
        setHidden(false);
    }

    return (
        <ListGroup as="ol" numbered >
            {props
                .programs
                .map(program => <ListGroup.Item onClick={() => showDetails(program)} as="li" >{program.courseName}</ListGroup.Item>)}

        </ListGroup>
    );
}
