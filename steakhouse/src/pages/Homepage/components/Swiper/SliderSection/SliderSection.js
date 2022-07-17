import { OrderButton } from '../../../../../utils/OrderButton/OrderButton.styled';
import * as s from './SliderSection.styled';
import img from './images/Bitmap@2x.png';
import HighlightedText from '../../../../../utils/HighlightedText/HighlightedText';

const SliderSection = () => {
  return (
    <>
      <s.SliderSectionStyled>
        <s.DescriptionContainer>
          <s.Description>
            <h1>
              <HighlightedText background="black" text="Rabat 10%" /> na pierwsze zamówienie!
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <b> promocji -10%</b>. Spiesz się. Czas trwania promocji do
                końca lutego.
              </p>
            </h1>
            <OrderButton>Zamów online</OrderButton>
 
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

