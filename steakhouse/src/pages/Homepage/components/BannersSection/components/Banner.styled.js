import styled from 'styled-components';

export const BannerStyled = styled.div`
  position: relative;
  width: 49%;
  height: auto;
  margin: 10px;
  //height: 400px;
  border-radius: 7px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 0px;
  }
`;

export const backgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  position: absolute;
  left: 10%;
  top: 20%;
  color: white;

  @media (max-width: 800px) {
    width: 55%;
  }

  @media (max-width: 1200px) {
    top: 15%;
  }

  @media (max-width: 1100px) {
    top: 1%;
  }

  @media (max-width: 450px) {
    top: 0;
    width: 50%;
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 0.8rem;
    width: 90%;
    margin: 0;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 5% 0;

  a {
    margin-right: 1%;
  }

  img {
  }
`;
