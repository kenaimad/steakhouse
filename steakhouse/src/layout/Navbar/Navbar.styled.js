import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { Colors } from '../../utils/palette';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  z-index: 10;
  background-color: white;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 5%;

  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 90vh;
    width: 100vw;
    margin-top: 4rem;
    background-color: black;
    z-index: 1;
  }
`;

export const StyledLink = styled(Link)`
  margin: 0 30px;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  transition: all 0.2s ease-in;
  //font-family:

  @media (max-width: 1200px) {
    display: flex;
    height: 16.5%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primaryBackground};
    border-top: 1px solid black;

    &.active {
      background-color: white;
      text-decoration: underline;
      color: black;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 5%;

  @media (max-width: 1200px) {
    width: 100vw;
    justify-content: center;
  }
`;

export const BurgerWrapper = styled.div`
  margin-left: 5%;
  img {
    object-fit: contain;
    align-self: center;
    width: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
