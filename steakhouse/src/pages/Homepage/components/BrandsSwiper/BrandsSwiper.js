import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay } from 'swiper';
import * as s from './BrandsSwiper.styled';

const BrandsSwiper = () => {
  const getInitialNumber = () => {
    if (document.documentElement.clientWidth < 800) {
      return 3;
    } else {
      return 5;
    }
  };

  const [slidesNum, setSlidesNum] = useState(getInitialNumber);

  const handleWidthChange = () => {
    if (document.documentElement.clientWidth < 800) {
      setSlidesNum(3);
    } else {
      setSlidesNum(5);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWidthChange);
  }, []);

  return (
    <s.StyledBrandsSwiper>
      <Swiper
        slidesPerView={slidesNum}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {' '}
          <a href="/#">
            <img src={require('./BrandsBar/icons/1.png')} alt="Pyszne.pl" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <a href="/#">
            <img src={require('./BrandsBar/icons/2.png')} alt="DeliGoo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <a href="/#">
            <img src={require('./BrandsBar/icons/3.png')} alt="Glovo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <a href="/#">
            <img src={require('./BrandsBar/icons/4.png')} alt="UberEats" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <a href="/#">
            <img src={require('./BrandsBar/icons/5.png')} alt="BoltFood" />
          </a>
        </SwiperSlide>
      </Swiper>
    </s.StyledBrandsSwiper>
  );
};

export default BrandsSwiper;
