import React from 'react'
import ProjectCard from './ProjectCard';
import PaperCard from './PaperCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import paperData from '../Content/Papers.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function MyWork() {
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>My work</h1>
            <p style={{ textAlign: "center" }}> A collection of my latest endeavours</p>
            <Row>
                <h2 style={{ textAlign: "center" }}>Projects</h2>
            </Row>
            <Row>
                <Col>
                    <div style={{ overflowY: 'hidden', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'inline-block', whiteSpace: 'normal' }}>
                            <ProjectCard></ProjectCard>
                        </div>
                        <div style={{ display: 'inline-block', whiteSpace: 'normal' }}>
                            <ProjectCard></ProjectCard>
                        </div>
                        <div style={{ display: 'inline-block', whiteSpace: 'normal' }}>
                            <ProjectCard></ProjectCard>
                        </div>
                        <div style={{ display: 'inline-block', whiteSpace: 'normal', height: '250px', position: 'relative' }}>
                            <Button style={{ width: '5rem', height: '100%' }}>
                                View all projects
                                <br /><br />
                                <FontAwesomeIcon icon={faCircleArrowRight} />
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center" }}>Publications</h2>
                </Col>
            </Row>
            <Row>
                <Col />
                <Col md='auto'>
                    <PaperCard data={paperData.Papers[0]}></PaperCard>
                </Col>
                <Col md='auto'>
                    <PaperCard data={paperData.Papers[0]}></PaperCard>
                </Col>
                <Col className='first-card-to-hide' md='auto'>
                    <PaperCard data={paperData.Papers[0]}></PaperCard>
                </Col>
                <Col >
                    <Button style={{ width: '5rem', height: '100%' }}>
                        More papers
                        <br /><br />
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </Button>
                </Col>
                <Col />
            </Row>
        </Container >
    )
}

export default MyWork