import { createGlobalStyle } from "styled-components";
import colors from "./variables";

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
      background-color: ${colors.white};
      color: #121212;      
      
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
  max-width: 1200px;
  width: 100%;
  margin: auto;

  @media (max-width: 1200px) {
    padding: 0 5vw !important; 
  }
  }
  
`;

export default StyleGlobal;
