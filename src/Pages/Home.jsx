import React, { useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import Video from '../Sections/Video';
import HowItWorks from '../Sections/HowItWorks';
import Section1 from '../Sections/Section1';

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
        howItWorksRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <HomeContainer>
            <Video scrollToHowItWorks={scrollToHowItWorks} />
            <Section>
                <Section1 />
            </Section>
            <Section ref={howItWorksRef} style={{ backgroundColor: 'black', height: 'auto' }}>
                <HowItWorks />
            </Section>
            <Section>section2</Section>
        </HomeContainer>
    );
}

export default Home;
