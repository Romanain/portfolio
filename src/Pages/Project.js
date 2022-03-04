import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ProjectsFile from '../Content/Projects.json'

function Project() {
    const { projectID } = useParams();
    const thisProject = ProjectsFile.Projects[projectID]
    var award = ("")

    if (thisProject.Awards.length > 0) {
        award = (
            <Container>
                <br /><br />
                <a href="https://www.ifdesign.com/en/winner-ranking/project/relio/322156">
                    <img src={require('../Content/Images/IF.png')} style={{
                        height: '6rem', width: 'auto', float: 'right'
                    }} />
                </a>
            </Container>
        )
    }

    // if (props.data.Images.length > 0) {
    //     imageStyle = { backgroundImage: `url(${require('../Content/Images/InstitutionIcons/' + props.data.Images[0].URL)})` }
    // }

    return (
        <Container id="top" className="section-head" style={{ marginTop: '4rem' }}>
            <Row>
                <Col >
                    {
                        thisProject.Images.map((Image) => (
                            <>
                                <img style={{ width: '100%', marginBottom: '1rem' }} alt={Image.Alt_text} src={require('../Content/Images/Project_photos/' + Image.URL)} />
                            </>
                        ))

                    }
                </Col>
                <Col>
                    <h1 style={{ marginBottom: '0px', textAlign: 'left' }}>{thisProject.Project_name}</h1>
                    <Row>
                        <Col xs={{ span: '1' }}>
                            <span style={{ fontSize: '1.75rem', color: 'grey', fontWeight: '400', marginTop: '0px' }}>{'>'}</span>
                        </Col>
                        <Col xs={{ span: '11' }}>

                            <span style={{ fontSize: '1.75rem', color: 'grey', fontWeight: '400', marginTop: '0px' }}>{thisProject.Tagline}</span>
                            <br />
                            <span style={{ fontSize: '1rem', color: 'grey', fontWeight: '700' }}>{thisProject.Year} | {thisProject.Project_type}</span>

                        </Col>

                    </Row>
                    <br />
                    <strong>{thisProject.Project_description.Introduction}</strong>

                    <div className="project-description project-description-problem">
                        <h4>The problem</h4>
                        {thisProject.Project_description.Problem}
                    </div>

                    <div className="project-description project-description-process">
                        <h4>The process</h4>
                        {thisProject.Project_description.Process}
                    </div>

                    <div className="project-description project-description-solution">
                        <h4>The solution</h4>
                        {thisProject.Project_description.Solution}
                    </div>

                    {award}

                </Col>
            </Row>

            { console.log(thisProject)}
        </Container >
    )
}

export default Project
