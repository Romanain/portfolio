import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IITLogo from '../Content/Images/InstitutionIcons/iit-logo-v3-vertical-pos-1000px.png'
import TUELogo from '../Content/Images/InstitutionIcons/TUe-logo-descriptor-stack-scarlet-L.png'
import LUXLogo from '../Content/Images/InstitutionIcons/University_of_Luxembourg_logo_fr.svg_.png'

function AExperience() {
    return (
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>Sep 2021 / Jan 2022</strong>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <img style={{ height: '2.5rem', float: 'right' }} src={LUXLogo} />
                        <h5>UNIVERSITY OF LUXEMBOURG</h5>
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Internship at the Human-Computer Interaction Research Group</span>
                        <p>
                            CoSensUs Framework. Exploration in the different ways designers and researchers can ideate sensors for measuring collaboration experience.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>July 2021 / Aug 2021</strong>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <img style={{ height: '2.5rem', float: 'right' }} src={TUELogo} />
                        <h5>EINDHOVEN UNIVERSITY OF TECHNOLOGY</h5>
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Student-Assistant at the department of Industrial Design</span>
                        <p>
                            Moirai. Conducting experiments and interviews with Moirai, a design that helps runners self-regulate their running through different negotiation behaviours.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>Oct 2019 / Jan 2020</strong>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <img style={{ height: '2.5rem', float: 'right' }} src={IITLogo} />
                        <h5>ISTITUTO ITALIANO DI TECNOLOGIA</h5>
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Internship at the COgNiTive Architecture for Collaborative Technologies (CONTACT) Unit</span>
                        <p>
                            Chef’s Hat Design of a card game made for Human-Robot Interaction with the iCub robot and reinforcement-learning based agents.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default AExperience
