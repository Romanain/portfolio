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
            <h1>Publications</h1>
            <Row>
                <Col>
                    <div className='horizontal-scroll-box'>
                        {
                            paperData.Papers.map((paper) => (
                                <div className='horizontal-scroll-item'>
                                    <PaperCard data={paper}></PaperCard>
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Publications
