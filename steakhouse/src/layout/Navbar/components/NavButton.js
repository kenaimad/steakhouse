import styled from 'styled-components';

export const NavButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90%;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.background};

  div {
    margin-top: 8px;
  }

  img {
  }
`;

const NavButton = (props) => {
  return (
    <NavButtonStyled background={props.background}>
      <img src={props.icon} alt="Order icon" />
      <div>{props.label}</div>
    </NavButtonStyled>
  );
};

export default NavButton;
