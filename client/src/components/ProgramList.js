import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function ProgramList(props) {
    return (
        <ListGroup as="ol" numbered >
            {props
                .programs
                .map(program => <ListGroup.Item as="li" >{program.courseName}</ListGroup.Item>)}

        </ListGroup>
    );
}
