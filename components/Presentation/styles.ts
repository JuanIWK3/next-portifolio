import styled, { keyframes } from "styled-components";
import { slideInRight } from "../../styles/animations";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 16px;
  max-width: 1000px;
  animation: ${slideInRight} 0.4s ease forwards;

  .front-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    text-align: center;
    max-width: 1000px;
  }
`;
