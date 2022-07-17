import BrandsBar from './components/BrandsBar/BrandsBar';
import Slider from './components/Swiper/Slider';
import BannersSection from './components/BannersSection/BannersSection';
import * as s from './Homepage.styled';

const Homepage = () => {
  return (
    <s.Container>
      <Slider />
      <BrandsBar />
      <BannersSection />
    </s.Container>
  );
};

export default Homepage;
