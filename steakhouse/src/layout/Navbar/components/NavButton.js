import * as s from './NavButton.styled';

const NavButton = (props) => {
  return (
    <s.NavButtonStyled background={props.background} color={props.color}>
      <img src={props.icon} alt="Order icon" />
      <div>{props.label}</div>
    </s.NavButtonStyled>
  );
};

export default NavButton;
