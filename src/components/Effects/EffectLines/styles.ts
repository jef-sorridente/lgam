import Lottie from "lottie-react";
import styled from "styled-components";

export const ContainerAnimation = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 10vh;

  @media (max-width: 768px) {
    top: 50vh;
  }

  @media (max-width: 425px) {
    top: 80vh;
  }
`;

export const Animation = styled(Lottie)`
  z-index: -2;
`;
