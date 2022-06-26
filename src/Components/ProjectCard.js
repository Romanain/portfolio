import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    var imageStyle = { backgroundColor: 'lightgrey' }
    var award;

    if (props.data.Images.length > 0) {
        imageStyle = { backgroundImage: `url(${require('../Content/Images/Project_photos/' + props.data.Images[0].URL)})` }
    }

    if (props.data.Awards.length > 0) {
        award = (
            <a href='https://www.ifdesign.com/en/winner-ranking/project/relio/322156'>
                <img src={require('../Content/Images/IF.png')} style={{
                    position: 'absolute', bottom: '1rem', right: '1rem',
                    height: '3rem', width: 'auto'
                }} />
            </a>
        )
    }

    // if 

    return (
        <Card style={{ width: '100%', height: '100%', marginRight: "1rem" }}>
            <div className="card-image" style={imageStyle}>
                {award}
            </div>
            <Card.Body>
                <Card.Title>
                    {props.data.Project_name} <span style={{ fontWeight: 'normal' }}>/ {props.data.Tagline}</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.data.Year} | {props.data.Project_type}</Card.Subtitle>
                <Card.Text style={{ marginBottom: '3.25rem' }}>{props.data.Project_description.Introduction}</Card.Text>
                <Link to={'/portfolio/project/' + props.idx + '#top'}>
                    <Button style={{ position: 'absolute', bottom: '1rem' }} variant="primary">Learn more</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
