/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
`;

const ContentBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextOverlay = styled.div`
    width: 200px;
    color: black;
    font-size: 80px;
    line-height: 100px;

    @media (max-width: 600px) {
        width: 100%;
        font-size: 40px;
        line-height: 50px;
    }
`;

function Section1() {
    return (
        <Container>
            <ContentBlock>
                <img
                    style={{
                        objectFit: 'contain',
                        // transform: 'scale(1.9)',
                        height: '40vw',
                        width: '40vw',

                        maxHeight: '600px',
                        maxWidth: '600px',
                    }}
                    alt="pic"
                    src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/Java%20Nova%201%20pack%202048x2048.png?alt=media&token=43b9f844-0017-4ab3-87ad-fe686e089ab4"
                />
            </ContentBlock>
            <ContentBlock
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TextOverlay>Simple.</TextOverlay>
                <TextOverlay>Fast.</TextOverlay>
                <TextOverlay>Easy.</TextOverlay>
                <TextOverlay>Period.</TextOverlay>
            </ContentBlock>
            <ContentBlock>
                <img
                    style={{
                        objectFit: 'contain',
                        height: '40vw',
                        width: '40vw',
                        maxHeight: '600px',
                        maxWidth: '600px',
                    }}
                    alt="pic"
                    src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/finished%20cup%20image%20nova.png?alt=media&token=ea0d8e9b-66ba-46be-8bb9-1251ded13cbf"
                />{' '}
            </ContentBlock>
        </Container>
    );
}

export default Section1;
