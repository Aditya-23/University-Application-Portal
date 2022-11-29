import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
import {getUniversityById} from '../actions/universities';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Carousel, Col, Container, Row} from "react-bootstrap";

function University(props) {

    const navigate = useNavigate();

    // DONT put a function inside useEffect, directly write statements that you want
    // to invoke after rendering
    useEffect(() => {
        props.getUniversityById(props.university.id);
    }, []);

    return (
        <Container fluid>
            <Row >
                <Col
                    md={{
                    span: 10,
                    offset: 1
                }}>
                    <Carousel >
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={props.university.imgURL1}
                                alt="First slide"
                                width="80px"
                                height="600px"/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.university.imgURL2}
                                alt="Second slide"
                                width="80px"
                                height="600px"/>

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.university.imgURL3}
                                alt="Third slide"
                                width="80px"
                                height="600px"/>

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>
            <Row>
                <Col
                    md={{
                    span: 10,
                    offset: 1
                }}>
                    <p>{props.university.university.description}</p>
                </Col>
            </Row>
        </Container>

    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer, university: state.universityReducer}
}

const mapDispatchToProps = {
    getUniversityById
}

export default connect(mapStateToProps, mapDispatchToProps)(University);