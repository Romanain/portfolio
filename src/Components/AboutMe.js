import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Skills from './Skills';
import Education from './Education';
import AExperience from './AExperience';
import PExperience from './PExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import PDF from '../Content/Resume_layout_v04_WEB.pdf'

function AboutMe() {
    return (
        <Container id="AboutMe" className="section-head section-container">
            <h1 style={{ textAlign: "center" }}>About me</h1>
            <Row>
                <Col md={{ span: 8, order: 0 }} sm={{ order: 1 }}>
                    <p>
                        I’m Romain, a student in Industrial Design (MSc) at the Eindhoven University of Technology. I have always been interested in the <strong>overlap</strong> of <strong>human psychology and emerging technologies</strong>, which naturally drew me towards <strong>Design and HCI</strong>. Over the course of my studies, I developed a particular interest in the research for and through <strong>design that enables users to deal with the complexity of everyday life</strong>, such as systems that help users better <strong>self-regulate</strong>, <strong>collaborate</strong>, or <strong> manage work/life balance</strong>. I enjoy working on the technical aspects of these projects and am fascinated be users’ psychology and behaviours interacting with these designs. In teams, I like learning about other’s projects and helping them out where possible. If you need creative input, a critical perspective, or technical advice, I’m always happy to help.
                    </p>
                    <p>
                        In my free time you can find me cooking something new in the kitchen, trying out different musical instruments, working on electronics, or marvelling online about the latest developments in tech. I’m always up for a discussion or to learn something new about a variety of topics, so never hesitate to strike up a conversation with me!
                    </p>
                </Col>
                <Col md={{ span: 4, order: 1 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>
                    <br />
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
                        “I want to do research for and through design that helps people deal with the complexity of everyday life”
                    </p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={{ span: 8 }} sm={{ order: 1 }}>
                    <Tabs defaultActiveKey="Skills" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Skills" title="Skills">
                            <Skills />
                        </Tab>
                        <Tab eventKey="Education" title="Education">
                            <Education />
                        </Tab>
                        <Tab eventKey="Academic_Experience" title="Academic Experience">
                            <AExperience />
                        </Tab>
                        <Tab eventKey="Professional_Experience" title="Professional Experience">
                            <PExperience />
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={{ span: 4 }} sm={{ order: 0 }} id="resume-download">
                    <div>
                        <Button size="lg" href={PDF} target="_blank">Download my resume<FontAwesomeIcon style={{ marginLeft: '1rem' }} icon={faDownload} /> </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe