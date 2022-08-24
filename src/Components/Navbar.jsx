import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import useWindowSize from '../Hooks/useWindowSize';
import JavaNovaLogo from '../Assets/JavaNovaLogoWhite.png';

const NavbarContainer = styled.div`
    height: 90px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
`;

const NavBox = styled.div`
    padding: 16px;
    width: 1400px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    width: 400px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuItems = styled.div`
    height: 40px;
    width: 400px;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
`;

const Cart = styled.div`
    height: 40px;
    width: 400px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const MenuItem = styled.div`
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoItem = styled.img`
    width: 110px;
    height: 110px;
    cursor: pointer;
`;

const CartItem = styled.div`
    width: 30px;
    height: 30px;
    color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;

    :hover {
        color: #e4aa78;
    }
`;

const Hamburger = styled.div`
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HamburgerItem = styled.div`
    width: 30px;
    height: 30px;
    color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;

    :hover {
        color: #e4aa78;
    }
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;

    :hover {
        color: #e4aa78;
    }
`;

function Navbar() {
    const windowSize = useWindowSize();
    const collapseMenu = windowSize.width < 1265;
    let collapseMenuWith;
    let justifyNavBox;
    if (collapseMenu) {
        collapseMenuWith = '100px';
        justifyNavBox = 'space-evenly';
    }

    const iconStyle = {
        height: '30px',
        width: '30px',
    };

    return (
        <NavbarContainer>
            <NavBox style={{ justifyContent: justifyNavBox }}>
                {collapseMenu ? (
                    <Hamburger>
                        <HamburgerItem>
                            <GiHamburgerMenu style={iconStyle} />
                        </HamburgerItem>
                    </Hamburger>
                ) : (
                    <MenuItems>
                        <MenuItem>
                            <StyledLink to="/aboutUs">About Us</StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink to="/recipes">Recipes</StyledLink>
                        </MenuItem>
                    </MenuItems>
                )}

                <Logo style={{ width: collapseMenuWith }}>
                    <StyledLink to="/">
                        <LogoItem src={JavaNovaLogo} />
                    </StyledLink>
                </Logo>
                <Cart style={{ width: collapseMenuWith }}>
                    <CartItem>
                        <RiShoppingCartLine style={iconStyle} />
                    </CartItem>
                </Cart>
            </NavBox>
        </NavbarContainer>
    );
}

export default Navbar;