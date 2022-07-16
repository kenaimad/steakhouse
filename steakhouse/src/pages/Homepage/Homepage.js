import BrandsBar from './components/BrandsBar/BrandsBar';
import SliderSection from './components/SliderSection/SliderSection';
import BannersSection from './components/BannersSection/BannersSection';
import * as s from './Homepage.styled';

const Homepage = () => {
  return (
    <s.Container>
      <SliderSection />
      <BrandsBar />
      <BannersSection />
    </s.Container>
  );
};

export default Homepage;
