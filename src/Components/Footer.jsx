import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid red;
    display: flex;
`;

const Logo = styled.img`
    height: 150px;
    width: 150px;
`;

const Content = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuLinks = styled.div`
    border: 1px solid red;
    height: 100px;
    width: 600px;
`;

function Footer() {
    return (
        <Container>
            <Logo src="https://firebasestorage.googleapis.com/v0/b/javanovamain.appspot.com/o/Java%20Nova%20logo%20Black.png?alt=media&token=ee354934-d74c-4c51-b24a-4a3bf71cab52" />
            <Content>
                <MenuLinks>stuff</MenuLinks>
            </Content>
        </Container>
    );
}

export default Footer;
