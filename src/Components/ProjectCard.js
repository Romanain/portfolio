import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProjectCard() {
    return (
        <div>
            <Card style={{ width: '26rem', marginRight: "1rem" }}>
                <Card.Img variant="top" src="holder.js/100px160" style={{ height: "16rem" }} />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Learn more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard
