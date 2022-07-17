import styled from 'styled-components';

export const StyledBrandsSwiper = styled.div`
  width: 100%;
  height: 37px;

  .swiper-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      a {
        display: inline-block;
        height: 100%;
        text-align: center;
      }
    }
  }

  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    position: absolute;
    left: 5%;
    top: 70%;
    font-size: 0px;

    @media (max-width: 800px) {
      top: 55%;
      left: 45%;
    }

    .swiper-pagination-bullet {
      border: 1px solid black;
      background-color: white;
    }
  }
`;
