import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid #ddd;
  height: 84px;

  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  .buttons {
    display: grid;
    grid-template-columns: 100px 100px;
  }

  button {
    background: none;
    border: none;
    padding: 16px;
    transition: all 0.3s linear;

    font-size: 16px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    cursor: pointer;
    &:hover {
      color: #0070f3;

      border-bottom: 1px solid #ddd;
    }
  }
`;
