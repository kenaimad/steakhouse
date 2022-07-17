import * as s from './Navbar.styled';
import orderIcon from './icons/order_icon.svg';
import accountIcon from './icons/myAccount_icon.svg';
import cartIcon from './icons/cart_icon.svg';
import NavButton from './components/NavButton';
import { useState } from 'react';
import { Colors } from '../../utils/palette';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAfterClick = () => {
    if (document.documentElement.clientWidth < 640) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <s.NavContainer>
        <s.LinksContainer open={isOpen} onClick={closeMenuAfterClick}>
          <img src={require('./icons/logo.png')} alt="Logo icon" />
          <s.StyledLink to="/steaks">Steaks</s.StyledLink>
          <s.StyledLink to="/burgers">Burgers</s.StyledLink>
          <s.StyledLink to="/fries">French Fries</s.StyledLink>
          <s.StyledLink to="/drinks">Drinks</s.StyledLink>
          <s.StyledLink to="/delivery">Gdzie dowozimy?</s.StyledLink>
          <s.StyledLink to="/contact">Kontakt</s.StyledLink>
        </s.LinksContainer>
        <s.ButtonsContainer>
          <NavButton
            destination="/account"
            label="Moje konto"
            background="white"
            icon={accountIcon}
          />
          <NavButton
            destination="cart"
            label="Koszyk"
            background="white"
            icon={cartIcon}
          />
          <NavButton
            destination="order"
            label="Zamów"
            background={Colors.buttonsBackground}
            color="white"
            icon={orderIcon}
          />
          {!isOpen ? (
            <s.BurgerWrapper onClick={toggleIsOpen}>
              <img
                src={require('./icons/burger-icon.png')}
                alt="Burger icon"
              ></img>
            </s.BurgerWrapper>
          ) : (
            <s.BurgerWrapper
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img
                src={require('./icons/close-icon.png')}
                alt="Close icon"
              ></img>
            </s.BurgerWrapper>
          )}
        </s.ButtonsContainer>
      </s.NavContainer>
    </>
  );
};

export default Navbar;
