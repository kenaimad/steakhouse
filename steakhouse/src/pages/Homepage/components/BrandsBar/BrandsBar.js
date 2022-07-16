import * as s from './Brandsbar.styled';

const BrandsBar = () => {
  return (
    <s.BrandsBarStyled>
      <div>
        <img src={require('./icons/1.png')} alt="Pyszne.pl"/>
        <img src={require('./icons/2.png')} alt="DeliGoo"/>
        <img src={require('./icons/3.png')} alt="Glovo"/>
        <img src={require('./icons/4.png')} alt="UberEats"/>
        <img src={require('./icons/5.png')} alt="BoltFood"/>
      </div>
    </s.BrandsBarStyled>
  );
};

export default BrandsBar;
