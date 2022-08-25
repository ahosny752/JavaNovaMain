import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;
    display: flex;
`;

function Footer() {
    return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
