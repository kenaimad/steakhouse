import styled from 'styled-components';
import { Colors } from '../palette';

export const OrderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.buttonsBackground};
  width: 204px;
  height: 49px;
  border-radius: 10px;
  color: white;
  font-family: "Sofia Pro";
  font-size: 14px;
  cursor: pointer;
`;
