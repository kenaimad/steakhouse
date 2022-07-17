import * as s from './Brandsbar.styled';

const BrandsBar = () => {
  return (
    <s.BrandsBarStyled>
      <div>
        <a href="/#">
          <img src={require('./icons/1.png')} alt="Pyszne.pl" />
        </a>
        <a href="/#">
          <img src={require('./icons/2.png')} alt="DeliGoo" />
        </a>
        <a href="/#">
          <img src={require('./icons/3.png')} alt="Glovo" />
        </a>
        <a href="/#">
          <img src={require('./icons/4.png')} alt="UberEats" />
        </a>
        <a href="/#">
          <img src={require('./icons/5.png')} alt="BoltFood" />
        </a>
      </div>
    </s.BrandsBarStyled>
  );
};

export default BrandsBar;
