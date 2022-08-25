import React from 'react';
import { Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import propTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const CartModalContainer = styled.div`
    .ui.segment {
        border: 0px solid rgba(34, 36, 38, 0.15);
    }
`;

const StyledSegment = styled(Segment)`
    margin: 0px !important;
    padding: 0px !important;
`;

function CartModal(props) {
    const { showSidebar, setShowSidebar } = props;

    return (
        <CartModalContainer>
            <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                onHide={() => setShowSidebar(false)}
                vertical
                visible={showSidebar}
                width="wide"
                direction="right"
            >
                <Menu.Item as="a">
                    <Icon name="home" />
                    Home
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="gamepad" />
                    Games
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="camera" />
                    Channels
                </Menu.Item>
            </Sidebar>
        </CartModalContainer>
    );
}

CartModal.propTypes = {
    showSidebar: propTypes.bool,
    setShowSidebar: propTypes.func,
};
export default CartModal;
