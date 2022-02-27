import React from 'react'
import ProjectCard from './ProjectCard';
import PaperCard from './PaperCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

import paperData from '../Content/Papers.json';

function MyWork() {
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>My work</h1>
            <p style={{ textAlign: "center" }}> A collection of my latest endeavours</p>
            <Row>
                <h2 style={{ textAlign: "center" }}>Projects</h2>
                <CardGroup>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </CardGroup>
            </Row>
            <br />
            <Row>
                <h2 style={{ textAlign: "center" }}>Publications</h2>
                <CardGroup>
                    <PaperCard data={paperData.Papers[0]}></PaperCard>
                    <PaperCard data={paperData.Papers[1]}></PaperCard>
                    <PaperCard data={paperData.Papers[2]}></PaperCard>
                </CardGroup>
            </Row>
        </Container>
    )
}

export default MyWork