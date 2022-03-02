import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    var imageStyle = { backgroundColor: 'lightgrey' }

    if (props.data.Images.length > 0) {
        imageStyle = { backgroundImage: `url(${require('../Content/Images/InstitutionIcons/' + props.data.Images[0].URL)})` }
    }

    return (
        <Card style={{ width: '26rem', height: '100%', marginRight: "1rem" }}>
            <div className="card-image" style={imageStyle}></div>
            <Card.Body>
                <Card.Title>
                    {props.data.Project_name} <span style={{ fontWeight: 'normal' }}>/ {props.data.Tagline}</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.data.Year} | {props.data.Project_type}</Card.Subtitle>
                <Card.Text style={{ marginBottom: '3.25rem' }}>{props.data.Project_description.Introduction}</Card.Text>
                <Link to={'./project/' + props.idx + '#top'}>
                    <Button style={{ position: 'absolute', bottom: '1rem' }} variant="primary">Learn more</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
