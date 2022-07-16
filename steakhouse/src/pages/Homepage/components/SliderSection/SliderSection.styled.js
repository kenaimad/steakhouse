import styled from 'styled-components';
import { Colors } from '../../../../utils/palette';

export const SliderSectionStyled = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.primaryBackground};
`;

export const Description = styled.div`
  position: absolute;
  left: 5%;
  top: 10%;
  

  h1 {
    font-size: 2.6vw;
    width: 60%;

    p {
      font-size: 1vw;
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
    width: 8px;
    height: 8px;
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
`;
