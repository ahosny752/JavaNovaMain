import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
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
    font-size: 120px;
    font-weight: bold;
    line-height: 120px;
    margin-top: 24px;
    margin-bottom: 24px;

    @media (max-width: 600px) {
        font-size: 60px;
    }
`;
const TheBestCoffee = styled(CoffeeRedesigned)`
    top: 200px;
    font-size: 40px;

    @media (max-width: 600px) {
        top: 100px;
        font-size: 30px;
    }
`;

const HowItWorks = styled(CoffeeRedesigned)`
    height: 50px;
    top: 240px;

    @media (max-width: 600px) {
        height: 50px;
        top: 150px;
    }
`;

function Video(props) {
    const { scrollToHowItWorks } = props;
    return (
        <VideoContainer>
            <CoffeeRedesigned>Coffee Redesigned.</CoffeeRedesigned>
            <TheBestCoffee>The Best Coffee You've Never Had.</TheBestCoffee>
            <HowItWorks>
                <StyledButton
                    type="button"
                    onClick={scrollToHowItWorks}
                    buttonText="Learn More"
                    iconName="arrow right"
                    color="black"
                />
            </HowItWorks>
            <StyledVideo
                playsInline
                autoPlay
                muted
                loop
                poster="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/Screen%20Shot%202022-08-27%20at%203.20.38%20AM.png?alt=media&token=c174cc0c-6158-4e63-b173-89f1ea2181b6"
            >
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/Java%20Nova%20site%20vid%20-%204K%20-%204K%20(1).mp4?alt=media&token=eb639a85-b11a-47d7-87ec-bab84c267c9d"
                    type="video/mp4"
                />
            </StyledVideo>
        </VideoContainer>
    );
}

Video.propTypes = {
    scrollToHowItWorks: propTypes.func,
};
export default Video;
