import styled from "styled-components";

export const ContainerLine = styled.div`
  position: absolute;
  max-width: 1100px;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    right: -500px;
  }

  span {
    position: absolute;
    width: 50px;
    /* height: 150%; */
    transform-origin: top;
    transform: rotate(35deg);
    top: -25%;
    right: 0;
    border-radius: 25px;

    animation: line-effect 1.5s ease-in-out both;
  }

  .line-1 {
    background-color: rgb(0, 125, 49, 0.6);
    right: 120px;
  }
  .line-2 {
    background-color: rgb(240, 158, 12, 0.6);
    right: 60px;
    animation-delay: 0.5s;
  }
  .line-3 {
    background-color: rgb(231, 11, 17, 0.6);
    animation-delay: 1s;
  }

  @keyframes line-effect {
    0% {
      height: 0%;
    }
    100% {
      height: 200%;
    }
  }
`;
