import React from 'react'
import ProjectCard from './ProjectCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import projectData from '../Content/Projects.json';

function MyWork() {
    return (
        <Container id="Projects" className="section-head section-container">
            <h1 style={{ textAlign: "center" }}>Design Projects</h1>
            <Row>
                <Col>
                    <div className='horizontal-scroll-box'>
                        {
                            projectData.Projects.map((project, idx) => (
                                <div className='horizontal-scroll-item'>
                                    <ProjectCard data={project} idx={idx}></ProjectCard>
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