import Lottie from "lottie-react";
import styled from "styled-components";

export const ContainerAnimation = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -100px;
  z-index: -2;

  @media (max-width: 768px) {
    bottom: 50vh;
  }

  @media (max-width: 425px) {
    bottom: 80vh;
  }
`;

export const AnimationCircle = styled(Lottie)``;
