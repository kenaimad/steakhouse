import { NavContainer } from "./Navbar.styled";
import orderIcon from './icons/order_icon.svg';
import accountIcon from './icons/myAccount_icon.svg';
import cartIcon from './icons/cart_icon.svg';
import NavButton from "./components/NavButton";


const Navbar = () => {
  return (
    <>
      <NavContainer>
      <img src={require('./icons/logo.png')} alt="Logo icon" />
      <NavButton label="Moje konto" background="white" icon={accountIcon}/>
      <NavButton label="Koszyk" background="white" icon={cartIcon}/>
      <NavButton label="Moje konto" background="red" icon={orderIcon}/>
      </NavContainer>
    </>
  );
};

export default Navbar;
