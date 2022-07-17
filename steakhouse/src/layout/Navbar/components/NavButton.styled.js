import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80%;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.background};
  cursor: pointer;
  font-family: 'Sofia Pro';
  &:hover {
    text-decoration: underline;
  }

  img {
  }
`;

export const LinkInButton = styled(Link)`
  display: inline-block;
  width: 100%;
  margin: 5px 0px;
  text-decoration: none;
  font-weight: 400;
  font-size: 13px;
  transition: all 0.2s ease-in;
  color: black;
  color: ${(props) => props.color};

  &.active {
    text-decoration: underline;
  }
`;
