import styled from 'styled-components';
import { Colors } from '../palette';

export const OrderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.buttonsBackground};
  width: 15vw;
  min-width: 100px;
  height: 49px;
  border-radius: 10px;
  color: white;
  font-family: "Sofia Pro";
  font-size: 14px;
  cursor: pointer;
`;
