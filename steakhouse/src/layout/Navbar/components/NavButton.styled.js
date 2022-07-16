import styled from 'styled-components';

export const NavButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 80%;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.background};
  cursor: pointer;
  font-family: 'Sofia Pro';
  

  div {
    margin-top: 5px;
    color: ${(props) => props.color};
  }

  img {
  }

  
`;