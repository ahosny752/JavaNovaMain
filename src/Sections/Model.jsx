import React from 'react';
import styled from 'styled-components';

const ModelContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-direction: row;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const ImgContainer = styled.div`
    height: 100%
    width: 100%;
    position: relative;

    @media (max-width: 600px) {
        height: 700px;

    }

`;

const ModelImg = styled.img`
    height: 100%;
    width: 34vw;
    object-fit: cover;
    opacity: 0.8;

    @media (max-width: 600px) {
        height: 100%;
        width: 100%;
    }
`;

const AffirmationContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 80px;
    font-weight: bold;
`;

function Model() {
    return (
        <ModelContainer>
            <ImgContainer>
                <AffirmationContainer>Strong</AffirmationContainer>

                <ModelImg src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/yazzy%20nova%20pic.jpg?alt=media&token=dc6cbcc6-6e03-42e5-b19e-8b30d53fc575" />
            </ImgContainer>
            <ImgContainer>
                <AffirmationContainer>Bold</AffirmationContainer>

                <ModelImg src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/Didi%20nova.jpg?alt=media&token=99c59f08-c8cd-489b-b584-4fba3057eeba" />
            </ImgContainer>

            <ImgContainer>
                <AffirmationContainer>Beautiful</AffirmationContainer>

                <ModelImg src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/Jasmine%20Nova%20pic.jpg?alt=media&token=71a2b156-2204-4ea1-9628-66479a4e5e72" />
            </ImgContainer>
        </ModelContainer>
    );
}

export default Model;
