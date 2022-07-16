import BrandsBar from './components/BrandsBar/BrandsBar';
import SliderSection from './components/SliderSection/SliderSection';
import * as s from './Homepage.styled';

const Homepage = () => {
  return (
    <s.Container>
      <SliderSection />
      <BrandsBar />
    </s.Container>
  );
};

export default Homepage;
