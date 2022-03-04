import styled from "styled-components";
import { slideInLeft } from "../../styles/animations";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 32px 16px;
  text-align: center;

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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 16px 0;

    .project {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 16px 8px;

      height: 450px;
      width: 300px;
      border-radius: 0.6rem;

      background: #ddd;
      color: #000;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &:hover {
        img {
          transform: scale(1);
        }

        p {
          transform: scale(0);
        }
      }

      img {
        transform: rotate(-30deg) scale(0.8);

        border-radius: 0.4rem;
        transition: all 0.25s linear;
        box-shadow: 1px 1px 5px 2px #bbb;
        border-radius: 0.3rem;
      }

      p {
        position: absolute;
        text-align: center;

        padding-left: 8px;
        z-index: 1;
        width: 100%;
        transition: all 0.25s linear;
        font-size: 24px;
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .all-projects-button {
    padding: 16px 24px;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
  }
`;
