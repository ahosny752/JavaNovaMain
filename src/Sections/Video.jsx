import React from 'react';
import styled from 'styled-components';
import JavaNovaSiteVideo from '../Assets/JavaNovaSiteVideo.mov';
import StyledButton from '../Components/StyledButton';

const VideoContainer = styled.div`
    position: relative;
`;
const StyledVideo = styled.video`
    filter: saturate(1.1) contrast(0.7) opacity(0.9) brightness(0.9);
    object-fit: cover;
    width: 100% !important;
    max-height: 600px !important;
    position: relative;
    z-index: 0;
`;

const CoffeeRedesigned = styled.div`
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5vw;
    font-weight: bold;
`;
const TheBestCoffee = styled(CoffeeRedesigned)`
    top: 32%;
    font-size: 3vw;
`;

const HowItWorks = styled(CoffeeRedesigned)`
    height: 50px;
    top: 45%;
`;

function Video() {
    return (
        <VideoContainer>
            <CoffeeRedesigned>Coffee Redesigned.</CoffeeRedesigned>
            <TheBestCoffee>The Best Coffee You've Never Had.</TheBestCoffee>
            <HowItWorks>
                <StyledButton buttonText="Learn More" iconName="arrow right" color="black" />
            </HowItWorks>
            <StyledVideo autoPlay muted loop id="myVideo">
                <source src={JavaNovaSiteVideo} type="video/mp4" />
            </StyledVideo>
        </VideoContainer>
    );
}

export default Video;
