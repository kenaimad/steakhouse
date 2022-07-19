import styled from 'styled-components';

export const SliderSectionStyled = styled.section`
  display: flex;
  width: 100%;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  overflow: hidden;


  @media (max-width: 800px) {
    width: 100%;
    order: 2;
  }
`;

export const Description = styled.div`
  position: absolute;
  left: 5%;
  top: 20%;

  @media (max-width: 800px) {
      position: static;
      display: flex;
      flex-direction: column;
      margin-left: 15%;
      width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    width: 100%;

    p {
      font-size: 1rem;
      width: 60%;
      font-weight: 300;
    }

    span {
      display: inline-block;
      color: white;
      background-color: black;
    }
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  margin-top: 5%;
  div {
    margin: 5px;
    margin-bottom: 20px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 50%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
  }
`;
