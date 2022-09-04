/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    height: 130px;
    font-size: 50px;
    padding: 20px;
    line-height: 50px;
    text-align: center;
`;

function Testimonials() {
    const loopArr = [
        'This stuff is amazing! - James W.',
        'Im addicted! - Jenna F',
        'This needs to be in stores! - Madison R.',
        "Best coffee I've ever had! - Sam L.",
        "I can't live without it. - Ryan F. ",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index >= 5) {
            setIndex(0);
        }

        const interval = setInterval(() => {
            setIndex(index + 1);
        }, 2000);
        return () => clearInterval(interval);
    });

    return (
        <Container>
            <Text>
                <div>{loopArr[index]}</div>
            </Text>
        </Container>
    );
}

export default Testimonials;
