import OrderButton from '../../../../utils/OrderButton/OrderButton';
import * as s from './SliderSection.styled';
import img from "./images/Bitmap@2x.png";

const SliderSection = () => {
  return (
    <>
      <s.SliderSectionStyled>
        <s.DescriptionContainer>
          <s.Description>
            <h1>
              <span>Rabat 10%</span> na pierwsze zamówienie!
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <b> promocji -10%</b>. Spiesz się. Czas trwania promocji do końca
                lutego.
              </p>
            </h1>
            <OrderButton />
            <s.DotsContainer>
                <div />
                <div />
                <div />
            </s.DotsContainer>
          </s.Description>
        </s.DescriptionContainer>
                  <s.ImageContainer>
            <img src={img} alt="Steak" />
          </s.ImageContainer>
      </s.SliderSectionStyled>
    </>
  );
};

export default SliderSection;
