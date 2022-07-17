import styled from 'styled-components';

export const BannerSectionStyled = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;



