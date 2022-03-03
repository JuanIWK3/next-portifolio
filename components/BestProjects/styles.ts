import styled from "styled-components";
import { slideInLeft } from "../../styles/animations";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 32px 16px;

  border-top: 1px solid #ddd;
  background: rgb(38 39 48);
  color: #fff;
  animation: ${slideInLeft} 0.8s ease forwards;

  .title {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .content-wrapper {
    max-width: 1000px;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;
    padding: 16px 0;

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }

    .project {
      color: #000;

      height: 50vw;
      min-height: 300px;
      max-height: 400px;

      border-radius: 0.5rem;
      background: #ddd;
    }
  }
`;
