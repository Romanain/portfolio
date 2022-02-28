import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PExperience() {
    return (
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>Aug 2021 / Present</strong>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <h5>50PERCENTGAMES</h5>
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Game Designer and Co-Founder</span>
                        <p>
                            Personal venture in board game design.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>May 2019 / Jul 2022</strong> (Planned)
                    </Col>
                    <Col md={{ span: 10 }}>
                        <h5>STUDIOSTRESS</h5>
                        <p>
                            Freelance work in Graphic Design and Web Development. Clients include DELA, RAI Amsterdam, IIA.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={{ span: 2 }}>
                        <strong>Jan 2014 / Apr 2019</strong>
                    </Col>
                    <Col md={{ span: 10 }}>
                        <h5>TOEBOSCH CONSULT</h5>
                        <p>
                            ICT, Web Design, Graphic Design for family business
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default PExperience
