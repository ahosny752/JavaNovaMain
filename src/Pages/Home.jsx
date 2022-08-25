import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import JavaNovaSiteVideo from '../Assets/JavaNovaSiteVideo.mov';
import Video from '../Sections/Video';

const HomeContainer = styled.div`
    height: 100%;
    overflow-y: auto;
    /* display: flex;
    flex-direction: column; */
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
    return (
        <HomeContainer>
            <Video />
            <Section>sec 1</Section>
            <Section style={{ backgroundColor: 'black', height: '300px' }}>sec 1</Section>
            <Section>sec 1</Section>
        </HomeContainer>
    );
}

export default Home;
