import * as s from './NavButton.styled';

const NavButton = (props) => {
  return (
    <s.NavButtonStyled background={props.background} color={props.color}>
      <img src={props.icon} alt="Order icon" />
      <s.LinkInButton to={props.destination} color={props.color}>{props.label}</s.LinkInButton>
    </s.NavButtonStyled>
  );
};

export default NavButton;
