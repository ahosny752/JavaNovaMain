import React from 'react';
import styled from 'styled-components';

const HowItWorksContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`;

const Title = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 25px;
    color: white;
    text-align: center;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StepsContainer = styled.div`
    /* border: 4px solid green; */
    margin-top: 20px;
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Box = styled.div`
    /* border: 1px solid blue; */

    width: 30vw;
    height: 20vw;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    @media (max-width: 600px) {
        width: 300px;

        height: 300px;
        margin: 20px;
    }
`;

const BoxTitle = styled.div`
    /* border: 1px solid red; */
    padding-top: 16px;
    height: 60px;
    width: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 850px) {
        font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

const BoxImg = styled.img`
    width: 18vw;
    height: 16vw;
    object-fit: contain;
    padding: 8px;

    @media (max-width: 600px) {
        padding: 0px;
        width: 280px;
        height: 300px;
        margin: 20px;
    }
`;
function HowItWorks() {
    return (
        <HowItWorksContainer>
            <Title>How It Works</Title>

            <StepsContainer>
                <Box>
                    <BoxTitle style={{ textDecoration: 'underline' }}>Step 1</BoxTitle>
                    <BoxTitle>Add Your Ice</BoxTitle>

                    <BoxImg src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/add%20ice%20gif.gif?alt=media&token=08b7b67b-aefb-439a-b181-5045f8ba00b0" />
                </Box>
                <Box>
                    <BoxTitle style={{ textDecoration: 'underline' }}>Step 2</BoxTitle>
                    <BoxTitle>Add Your Milk</BoxTitle>

                    <BoxImg src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/add%20milk%20gif.gif?alt=media&token=fcdf1912-f350-49ba-b50d-17594091b07a" />
                </Box>
                <Box>
                    <BoxTitle style={{ textDecoration: 'underline' }}>Step 3</BoxTitle>
                    <BoxTitle>Add Java Nova</BoxTitle>

                    <BoxImg src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/dispense%20gif.gif?alt=media&token=61efe900-ef18-4578-8102-5174b7caed17" />
                </Box>
                <Box>
                    <BoxTitle style={{ textDecoration: 'underline' }}>Step 4</BoxTitle>
                    <BoxTitle>Stir and Enjoy</BoxTitle>

                    <BoxImg src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/stir%20and%20enjoy%20gif.gif?alt=media&token=d8d217e2-873e-4027-aaba-cf390bdbcbad" />
                </Box>
            </StepsContainer>
        </HowItWorksContainer>
    );
}

export default HowItWorks;
