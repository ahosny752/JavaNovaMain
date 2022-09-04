import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import StyledButton from '../Components/StyledButton';

const VideoContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const StyledVideo = styled.video`
    filter: saturate(1.1) contrast(0.7) opacity(0.9) brightness(0.9);
    object-fit: cover;
    width: 100% !important;
    max-height: 600px !important;
    position: relative;
    z-index: 0;
`;

const ContentContainer = styled.div`
    position: absolute;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CoffeeRedesigned = styled.div`
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
    margin-bottom: 24px;

    @media (max-width: 600px) {
        margin-bottom: 0px;

        font-size: 50px;
        line-height: 30px;
    }
`;
const TheBestCoffee = styled(CoffeeRedesigned)`
    font-size: 40px;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

const HowItWorks = styled(CoffeeRedesigned)`
    height: 50px;

    @media (max-width: 600px) {
        margin-top: 30px;
        height: 50px;
    }
`;

function Video(props) {
    const { scrollToHowItWorks } = props;
    return (
        <VideoContainer>
            <ContentContainer>
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
            </ContentContainer>
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
