import React from 'react'
import ProjectCard from './ProjectCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import projectData from '../Content/Projects.json';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MyWork(props) {
    var button = <>
        <Row>
            <Col />
            <Col className='text-center' >
                <Link to={'./projects-and-courses/'}>
                    <Button variant="outline-primary" size="lg">
                        See all projects and courses
                    </Button>
                </Link>
            </Col>
            <Col />
        </Row>
    </>

    if (props.amount >= projectData.Projects.length) {
        button = '';
    }

    return (
        <Container id="Projects" className="section-head section-container">
            <h2 style={{ textAlign: "center", marginTop: props.margin }}>Projects and courses</h2>
            <Row>
                {
                    projectData.Projects.slice(0, props.amount).map((project, idx) => (
                        <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }} className='non-scroll-item'>
                            <ProjectCard data={project} idx={idx}></ProjectCard>
                        </Col>
                    ))
                }
            </Row>
            {button}

        </Container >
    )
}

MyWork.defaultProps = {
    amount: 3,
    margin: '0'
}

export default MyWork