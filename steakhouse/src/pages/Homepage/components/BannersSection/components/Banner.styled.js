import styled from 'styled-components';

export const BannerStyled = styled.div`
  position: relative;
  width: 49%;
  margin: 10px;
  height: 400px;
  border-radius: 7px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const backgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  position: absolute;
  left: 10%;
  top: 20%;
  color: white;

  @media (max-width: 800px) {
    width: 55%;

  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  p{
    font-size: 0.6rem;
    width: 90%;
    margin: 0;
  }

`;

export const IconsContainer = styled.div`
  display: flex;
  margin: 5% 0;

  img {
    margin-right: 3%;
  }

`
