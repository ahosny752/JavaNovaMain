import React from 'react';
import styled from 'styled-components';

const MailingListContainer = styled.div`
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

function MailingList() {
    return <MailingListContainer>MailingList</MailingListContainer>;
}

export default MailingList;
