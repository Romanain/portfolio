import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProjectCard(props) {
    return (
        <Card style={{ width: '26rem', height: '100%', marginRight: "1rem" }}>
            <Card.Img variant="top" src="holder.js/100px160" style={{ height: "16rem" }} />
            <Card.Body>
                <Card.Title>
                    {props.data.Project_name} <span style={{ fontWeight: 'normal' }}>/ {props.data.Tagline}</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.data.Year} | {props.data.Project_type}</Card.Subtitle>
                <Card.Text style={{ marginBottom: '3.25rem' }}>{props.data.Project_description.Introduction}</Card.Text>
                <Button style={{ position: 'absolute', bottom: '1rem' }} variant="primary">Learn more</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
