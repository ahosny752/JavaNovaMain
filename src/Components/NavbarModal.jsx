import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Modal } from 'semantic-ui-react';

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;

    :hover {
        color: #e4aa78;
    }
`;
function NavbarModal(props) {
    const { modalOpen, setModalOpen } = props;
    return (
        <Modal
            basic
            onClose={() => setModalOpen(false)}
            onOpen={() => setModalOpen(true)}
            open={modalOpen}
            size="small"
        >
            <Header icon>
                <StyledLink onClick={() => setModalOpen(false)} to="/aboutUs">
                    About Us
                </StyledLink>
            </Header>
            <Header icon>
                <StyledLink onClick={() => setModalOpen(false)} to="/recipes">
                    Recipes
                </StyledLink>
            </Header>
        </Modal>
    );
}

NavbarModal.propTypes = {
    modalOpen: propTypes.bool,
    setModalOpen: propTypes.func,
};

NavbarModal.defaultProps = {};
export default NavbarModal;
