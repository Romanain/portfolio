import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaperCard from './PaperCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import paperData from '../Content/Papers.json';

function Publications() {
    return (
        <Container id="Publications" className="section-head section-container">
            <h2>Publications</h2>
            <Row>
                {
                    paperData.Papers.map((paper) => (
                        <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }} className='non-scroll-item'>
                            <PaperCard data={paper}></PaperCard>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Publications
