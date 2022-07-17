import styled from 'styled-components';

export const StyledSwiperContainer = styled.div`
  .swiper-wrapper {
    position: relative;
  }

  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    display: flex;

    div {
      height: 8px;
      width: 8px;
      border-radius: 100%;
      border: 1px solid black;
      font-size: 0px;
    }
  }

  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    position: absolute;
    left: 5%;
    top: 70%;

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
