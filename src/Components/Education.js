import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TUELogo from '../Content/Images/InstitutionIcons/TUe-logo-descriptor-stack-scarlet-L.png'

function Education() {
    return (
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>Sep 2020 / July 2022</strong> (Expected)
                    </Col>
                    <Col md={{ span: 10 }}>
                        <img style={{ height: '2.5rem', float: 'right' }} src={TUELogo} />
                        <h5>EINDHOVEN UNIVERSITY OF TECHNOLOGY</h5>
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>MSc Industrial Design (120 ECTS)</span>
                        <p>
                            Final Master Project: CoSensUs toolkit – Get a Sense for Collaborative Experience. An interactive sensor toolkit for teams to explore and self-track their own Collaboration Experience.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>Sep 2017 / July 2020</strong>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <img style={{ height: '2.5rem', float: 'right' }} src={TUELogo} />
                        <h5>EINDHOVEN UNIVERSITY OF TECHNOLOGY</h5>
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>BSc Industrial Design (185 ECTS)</span>
                        <p>
                            Average Mark: 8 / Final Bachelor Project Mark: 9
                        </p>
                        <p>
                            Final Bachelor Project: Hikey – The beginning of a lifetime learning adventure. A homework planning app that stimulates self-regulated learning for primary school children
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>Sep 2011 / July 2017</strong>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <h5>SINT-MAARTENS COLLEGE</h5>
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>VWO Gymnasium</span>
                        <p>
                            High school with Latin and Greek
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Education
