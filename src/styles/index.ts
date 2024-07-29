import styled, { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter Tight", sans-serif;
        list-style: none;
    }
    body{
      background-color: #1B1B1F;
      color: #DFDFD6;
      overflow-x: hidden;
    }
`;

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    padding: 5vw;
  }
`;

export default StyleGlobal;
