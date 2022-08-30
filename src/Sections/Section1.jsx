import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: flex;
`;

const Image1Container = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    object-fit: contain;
    display: flex;
    /* border: 1px solid red; */
`;

const Image2Container = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: right;
    object-fit: contain;
    overflow: hidden;
`;
function Section1() {
    return (
        <Container>
            <Image1Container>
                <img
                    alt="pic"
                    src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/Single%20Can.png?alt=media&token=3da4be76-7854-4b01-8831-b630700f7364"
                />
            </Image1Container>
            <Image2Container>
                <img
                    style={{ transform: 'scale(1.2)' }}
                    alt="pic"
                    src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/1__1497_of_1585_-removebg.png?alt=media&token=87597eab-edfd-4a2b-ac46-4aab70d47d6f"
                />
            </Image2Container>
        </Container>
    );
}

export default Section1;
