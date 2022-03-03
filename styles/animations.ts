import { keyframes } from "styled-components";

export const slideInRight = keyframes`
from { 
  transform: translateX(2000px) scale(.2);
}
 to {
  transform: translateX(0px) scale(1);
 }
`;

export const slideInLeft = keyframes`
from { 
  transform: translateX(-2000px) scale(.2);
}
 to {
  transform: translateX(0px) scale(1);
 }
`;
