//import BrandsBar from './components/BrandsSwiper/BrandsBar/BrandsBar';
import Slider from './components/Swiper/Slider';
import BannersSection from './components/BannersSection/BannersSection';
import * as s from './Homepage.styled';
import BrandsSwiper from './components/BrandsSwiper/BrandsSwiper';

const Homepage = () => {
  return (
    <s.Container>
      <Slider />
      <BrandsSwiper />
      <BannersSection />
    </s.Container>
  );
};

export default Homepage;
//<BrandsBar />