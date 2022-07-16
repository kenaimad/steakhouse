import * as s from './Brandsbar.styled';

const BrandsBar = () => {
  return (
    <s.BrandsBarStyled>
      <div>
        <img src={require('./icons/1.png')} />
        <img src={require('./icons/2.png')} />
        <img src={require('./icons/3.png')} />
        <img src={require('./icons/4.png')} />
        <img src={require('./icons/5.png')} />
      </div>
    </s.BrandsBarStyled>
  );
};

export default BrandsBar;
