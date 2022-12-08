import React from 'react';
import {Modal, Button} from "react-bootstrap";

export default function ProgramDetails(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <h1>Footer</h1>
            </Modal.Footer>
        </Modal>
    );
}
