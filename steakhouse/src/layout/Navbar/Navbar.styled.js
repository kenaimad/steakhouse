import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 5%;
`;

export const StyledLink = styled(Link)`
  margin: 0 30px;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 14px;
  transition: all 0.2s ease-in;
  //font-family:

  &:hover {
    
  }

  &.active {
    
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 5%;
`;
