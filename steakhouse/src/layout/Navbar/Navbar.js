import * as s from './Navbar.styled';
import orderIcon from './icons/order_icon.svg';
import accountIcon from './icons/myAccount_icon.svg';
import cartIcon from './icons/cart_icon.svg';
import NavButton from './components/NavButton';
import { Colors } from '../../utils/palette';


const Navbar = () => {
  return (
    <>
      <s.NavContainer>
        <s.LinksContainer>
          <img src={require('./icons/logo.png')} alt="Logo icon" />
          <s.StyledLink to="#">Steaks</s.StyledLink>
          <s.StyledLink to="#">Burgers</s.StyledLink>
          <s.StyledLink to="#">French Fries</s.StyledLink>
          <s.StyledLink to="#">Drinks</s.StyledLink>
          <s.StyledLink to="#">Gdzie dowozimy?</s.StyledLink>
          <s.StyledLink to="#">Kontakt</s.StyledLink>
        </s.LinksContainer>
        <s.ButtonsContainer>
          <NavButton label="Moje konto" background="white" icon={accountIcon} />
          <NavButton label="Koszyk" background="white" icon={cartIcon} />
          <NavButton
            label="Moje konto"
            background={Colors.buttonsBackground}
            color="white"
            icon={orderIcon}
          />
        </s.ButtonsContainer>
      </s.NavContainer>
    </>
  );
};

export default Navbar;
