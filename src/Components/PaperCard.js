import React from 'react'
import Card from 'react-bootstrap/Card'

function PaperCard(props) {
    const AuthorList = [];

    for (let AuthorIndex in props.data.Authors) {

        if (props.data.Authors[AuthorIndex] != 'Toebosch, Romain HA') {
            AuthorList.push(props.data.Authors[AuthorIndex])
        } else {
            AuthorList.push(<span style={{ fontWeight: 'bold' }}>Toebosch, Romain HA</span>)
        }

        if (AuthorIndex < props.data.Authors.length - 1) AuthorList.push('; ')
    }

    return (
        <Card style={{ width: '26rem', height: '100%', marginRight: '1rem' }}>
            <Card.Body>
                <Card.Title> {props.data.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {props.data.Year} | {props.data.Journal}
                </Card.Subtitle>
                <Card.Text style={{ marginBottom: "2rem" }}>
                    {AuthorList}
                </Card.Text>
                <Card.Link
                    style={{ position: 'absolute', bottom: '1rem' }}
                    href={props.data.DOI_URL}>DOI: {props.data.DOI_URL}
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default PaperCard
