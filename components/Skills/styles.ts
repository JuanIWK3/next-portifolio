import styled from "styled-components";
import { slideInRight } from "../../styles/animations";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 16px 48px 16px;
  max-width: 1000px;
  transform: translateX(2000px) scale(0.2);
  animation: ${slideInRight} 0.6s ease forwards;

  .skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      border-radius: 0.3rem;
      background: none;
      border: none;
      box-shadow: 1px 1px 1px 1px rgba(200, 200, 200, 0.4);
      margin: 8px;
      transition: all 0.2s linear;

      &:hover {
        background: rgba(200, 200, 200, 0.2);
      }

      img {
        border-radius: 0.3rem;
        margin-right: 8px;
      }
      p {
        margin-left: 8px;
      }
    }
  }
`;
