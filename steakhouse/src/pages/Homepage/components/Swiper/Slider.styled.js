import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledSwiperContainer = styled.div`

.swiper-wrapper {
}

.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
}

.swiper-pagination {
    bottom: 100px;

    .swiper-pagination-bullet {
        border: 1px solid black;
        background-color: white;
    }
}
`

export const StyledSwiper = styled(Swiper)`
height: 600px;
width: 100%;
`