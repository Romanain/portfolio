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

function Competencies() {
    return (
        <Container id="Resume" className="section-head section-container">
            <Row>
                <h2 style={{ textAlign: "center" }}>Competency development</h2>
                <Col md={{ span: 12 }} sm={{ order: 0 }}>
                    <Tabs defaultActiveKey="MDC" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="MDC" title="MD&C">
                            <h3>Math, Data, & Computing</h3>
                            <p>
                                In terms of MD&C, I had a strong focus on Machine Learning (ML) and had several projects that were about giving control and awareness to users through data. I specialized in TinyML during my FMP, in Explainable AI (XAI) during the course Embodying intelligent behavior in social context, and was introduced to perceptrons in the course Complex and adaptive systems. Work on the XAI course also resulted in two published papers. I furthermore learned more advanced web development with different JavaScript frameworks for front and backend, which I applied during my M11 Project and the course Embodying intelligent behavior in social context (the code for this portfolio can also be found on GitHub). Furthermore, my M12 Research project was about how to design interactions with a recommender system for runners. Lastly, my FMP had a strong focus on data flow, data protection, and different types of processing data, and overall contained a lot of data and coding related challenges.
                            </p>
                        </Tab>
                        <Tab eventKey="US" title="U&S">

                        </Tab>
                        <Tab eventKey="CA" title="C&A">

                        </Tab>
                        <Tab eventKey="TR" title="T&R">

                        </Tab>
                        <Tab eventKey="BE" title="B&E">

                        </Tab>
                        <Tab eventKey="DR" title="D&R">

                        </Tab>
                        <Tab eventKey="Skills" title="Skills">

                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default Competencies
