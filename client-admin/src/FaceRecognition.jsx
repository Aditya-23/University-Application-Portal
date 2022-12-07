import React from 'react';
import {useEffect} from "react";
import {Form} from "react-bootstrap";

export default function FaceRecognition(props) {
    var faceio;
    useEffect(() => {
        faceio = new faceIO("fioacd1c");
    }, [])

    const handleSignIn = async() => {
        try {
            let response = await faceio.enroll({
                locale: "auto",
                payload: {
                    email: props.email,
                    pin: props.pin
                }
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogIn = async() => {
        try {
            let response = await faceio.authenticate({locale: "auto"});

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeHandler = (e) => {
        setEditProfile((editProfile) => {
            return ({
                ...editProfile,
                [e.target.name]: e.target.value
            })
        })
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>User</Form.Label>
                    <Form.Control
                        name='email'
                        onChange={e => onChangeHandler(e)}
                        type="text"
                        required/>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label>Pin</Form.Label>
                    <Form.Control
                        name='pin'
                        onChange={e => onChangeHandler(e)}
                        type="text"
                        required/>
                </Form.Group>
                <br></br>

                <button onClick={() => handleSignIn()}>Sign-in</button>
                <button onClick={() => handleLogIn()}>Log-in</button>
            </Form>

        </div>
    );
}
