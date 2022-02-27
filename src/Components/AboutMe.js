import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function AboutMe() {
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>About me</h1>
            <Row>
                <Col md={{ span: 8, order: 0 }} sm={{ order: 1 }}>
                    <p>
                        I’m Romain, a student in Industrial Design (MSc) at the Eindhoven University of Technology. I have always been interested in the overlap of human psychology and emerging technologies, which naturally drew me towards Design and HCI. Over the course of my studies, I developed a particular interest in the research for and through design that enables users to deal with the complexity of everyday life, such as systems that help users better self-regulate, collaborate, or manage work/life balance. I enjoy working on the technical aspects of these projects and am fascinated be users’ psychology and behaviours interacting with these designs. In teams, I like learning about other’s projects and helping them out where possible. If you need creative input, a critical perspective, or technical advice, I’m always happy to help.
                    </p>
                    <p>
                        In my free time you can find me cooking something new in the kitchen, trying out different musical instruments, working on electronics, or marvelling online about the latest developments in tech. I’m always up for a discussion or to learn something new about a variety of topics, so never hesitate to strike up a conversation with me!
                    </p>
                    {/* <Row>
                        <Col md="auto">
                            <Button variant="secondary" size="md">
                                Education
                            </Button>
                        </Col>
                        <Col />
                        <Col md="auto">
                            <Button variant="secondary" size="md">
                                Experience
                            </Button>
                        </Col>
                        <Col />
                        <Col md="auto">
                            <Button variant="secondary" size="md">
                                Resume
                            </Button>
                        </Col>
                    </Row> */}
                </Col>
                <Col md={{ span: 4, order: 1 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>
                    <p>
                        “I want to do research for and through design that helps people deal with the complexity of everyday life”
                    </p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={{ span: 8 }} sm={{ order: 1 }}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Skills" title="Skills">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="Education" title="Education">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="Experience" title="Experience">
                            {/* <Sonnet /> */}
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={{ span: 4 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>
                    <p>Download my resume</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe