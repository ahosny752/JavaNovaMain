import React, { useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import Video from '../Sections/Video';
import HowItWorks from '../Sections/HowItWorks';
import Section1 from '../Sections/Section1';
import Model from '../Sections/Model';
import Testimonials from '../Sections/Testimonials';
import Footer from '../Components/Footer';

const HomeContainer = styled.div`
    height: 100%;
    overflow-y: auto;
`;

const Section = styled.div`
    /* border: 1px solid green; */
    height: 650px;
    width: 800px
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Home() {
    const howItWorksRef = useRef(null);

    const scrollToHowItWorks = () => {
        howItWorksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <HomeContainer>
            <Video scrollToHowItWorks={scrollToHowItWorks} />
            <Section style={{ height: 'auto' }}>
                <Section1 />
            </Section>
            <Section ref={howItWorksRef} style={{ backgroundColor: 'black', height: 'auto' }}>
                <HowItWorks />
            </Section>
            <Section style={{ height: '400px' }}>
                <Testimonials />
            </Section>

            <Section style={{ height: 'auto' }}>
                <Model />
            </Section>
            <Section style={{ height: '300px' }}>
                {' '}
                <Footer />{' '}
            </Section>
        </HomeContainer>
    );
}

export default Home;
