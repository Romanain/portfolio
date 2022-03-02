import React from 'react'
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import MyWork from '../Components/MyWork';
import ContactMe from '../Components/ContactMe';
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Container fluid style={{
                backgroundColor: 'green', paddingBottom: '3rem',
                backgroundImage: `url(${require('../Content/Images/DJI_0064.jpg')})`,
                backgroundSize: 'cover', backgroundPosition: 'right', backgroundAttachment: 'fixed'
            }}>
                <Banner />
            </Container>

            <AboutMe />
            {/* <Container style={{
                height: '16rem', marginTop: '3rem', marginBottom: '3rem',
                backgroundImage: `url(${require('../Content/Images/Arduino_presentation-2.jpg')})`,
                backgroundSize: 'cover', backgroundPosition: 'right'
            }} /> */}
            <MyWork />

            <Container fluid style={{
                height: '16rem', marginTop: '3rem', marginBottom: '3rem',
                backgroundImage: `url(${require('../Content/Images/DJI_0064.jpg')})`,
                backgroundSize: 'cover', backgroundPosition: 'right', backgroundAttachment: 'fixed'
            }} />
            <ContactMe />
        </>
    )
}

export default Home
