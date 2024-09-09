import Lottie from "lottie-react";
import styled from "styled-components";

export const ContainerAnimation = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 10vh;
  z-index: -2;

  @media (max-width: 768px) {
    top: 50vh;
  }

  @media (max-width: 425px) {
    top: 60vh;
  }
`;

export const Animation = styled(Lottie)`
  z-index: -2;
`;
