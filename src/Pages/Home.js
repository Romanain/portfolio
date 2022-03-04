import React from 'react'
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import MyWork from '../Components/MyWork';
import ContactMe from '../Components/ContactMe';
import Container from 'react-bootstrap/Container';
import Resume from '../Components/Resume';
import Publications from '../Components/Publications';

function Home() {
    return (
        <>
            <Container fluid style={{
                // backgroundImage: `url(${require('../Content/Images/DJI_0064.jpg')})`,
                backgroundSize: 'cover', backgroundPosition: 'right', backgroundAttachment: 'fixed'
            }}>
                
            <Banner />

            </Container>

            <AboutMe />

            <MyWork />

            <Publications/>

            <Resume/>

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
