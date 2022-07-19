import { SwiperSlide, Swiper } from 'swiper/react';
import SliderSection from './SliderSection/SliderSection';

import 'swiper/css';
import 'swiper/css/pagination';

import * as s from './Slider.styled';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/autoplay';

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + (index + 1) + "</div>";
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
