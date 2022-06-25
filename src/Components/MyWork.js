import React from 'react'
import ProjectCard from './ProjectCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import projectData from '../Content/Projects.json';
import Button from 'react-bootstrap/Button';

function MyWork() {
    return (
        <Container id="Projects" className="section-head section-container">
            <h2 style={{ textAlign: "center" }}>Projects and courses</h2>
            <Row>
                {
                    projectData.Projects.slice(0, 3).map((project, idx) => (
                        <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }} className='non-scroll-item'>
                            <ProjectCard data={project} idx={idx}></ProjectCard>
                        </Col>
                    ))
                }
            </Row>
            <Row>
                <Col />
                <Col className='text-center' >
                    <Button variant="outline-primary" size="lg">
                        See all projects and courses
                    </Button>
                </Col>
                <Col />
            </Row>

        </Container >
    )
}

export default MyWork