import React from 'react'
import ProjectCard from './ProjectCard';
import PaperCard from './PaperCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import paperData from '../Content/Papers.json';
import projectData from '../Content/Projects.json';

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
                    <div className='horizontal-scroll-box'>
                        {
                            projectData.Projects.map((project) => (
                                <div className='horizontal-scroll-item'>
                                    <ProjectCard data={project}></ProjectCard>
                                </div>
                            ))
                        }
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
                <Col>
                    <div className='horizontal-scroll-box'>
                        {
                            paperData.Papers.map((paper) => (
                                <div className='horizontal-scroll-item'>
                                    <PaperCard data={paper}></PaperCard>
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default MyWork