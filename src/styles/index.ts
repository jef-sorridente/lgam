import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter Tight", sans-serif;
        list-style: none;
        text-decoration: none;
        object-fit: contain;
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

  .container {
  max-width: 1366px;
  width: 100%;
  margin: auto;

  @media (max-width: 1366px) {
    padding: 0 5vw !important; 
  }
  }
  
`;

export default StyleGlobal;
