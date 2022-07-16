import styled from 'styled-components';

export const BannerStyled = styled.div`
  position: relative;
  width: 49%;
  margin-bottom: 30px;
  height: 400px;
  border-radius: 7px;
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

  h1 {
    font-size: 1.4vw;
    margin-bottom: 20px;
  }

  p{
    font-size: 1vw;
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
