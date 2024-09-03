import styled, { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter Tight", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    html{
      overflow-x: hidden;
    }

    body{
      background-color: #1B1B1F;
      color: #DFDFD6;      
      
    }

    /*Global Anim */

    @keyframes anim-opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: auto;
  padding: 5vw 5vw 0 5vw;
`;

export default StyleGlobal;
