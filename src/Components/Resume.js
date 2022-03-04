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
import $ from 'jquery';


import PDF from '../Content/Resume_layout_v04_WEB.pdf' 

function Resume() {
    return (
        <Container id="Resume" className="section-head section-container">
            <Row>
                <h1 style={{ textAlign: "center" }}>Resume</h1>
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

export default Resume
