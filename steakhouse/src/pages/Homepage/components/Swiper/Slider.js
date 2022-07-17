import { SwiperSlide, Swiper } from 'swiper/react';
import SliderSection from './SliderSection/SliderSection';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import * as s from './Slider.styled';
// import required modules
import { Pagination, Autoplay } from 'swiper';
//import { StyledSwiper, StyledSwiperContainer } from './Slider.styled';
import 'swiper/css/autoplay';

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function () {
      return '<span></span>';
    },
  };

  return (
    <>
      <s.StyledSwiperContainer>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={pagination}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderSection />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection />
          </SwiperSlide>
        </Swiper>
      </s.StyledSwiperContainer>
    </>
  );
};

export default Slider;
