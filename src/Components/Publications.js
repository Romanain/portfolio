import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaperCard from './PaperCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import paperData from '../Content/Papers.json';
import { Link } from 'react-router-dom';

function Publications(props) {
    var button = <>
        <Row>
            <Col />
            <Col className='text-center' >
                <Link to={'./publications/'}>
                    <Button variant="outline-primary" size="lg">
                        See all publications
                    </Button>
                </Link>
            </Col>
            <Col />
        </Row>
    </>

    if (props.amount >= paperData.Papers.length) {
        button = '';
    }

    return (
        <Container id="Publications" className="section-head section-container">
            <h2 style={{ textAlign: "center", marginTop: props.margin }}>Publications</h2>
            <Row>
                {
                    paperData.Papers.slice(0, props.amount).map((paper) => (
                        <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }} className='non-scroll-item'>
                            <PaperCard data={paper}></PaperCard>
                        </Col>
                    ))
                }
            </Row>
            {button}
        </Container>
    )
}

Publications.defaultProps = {
    amount: 3,
    margin: '0'
}

export default Publications
