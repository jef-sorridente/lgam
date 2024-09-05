import Lottie from "lottie-react";
import styled from "styled-components";

export const ContainerAnimation = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: -2;
`;

export const Animation = styled(Lottie)`
  position: relative;
  left: 0;
  right: 0;
  z-index: -2;
`;

export const AnimationLines = styled(Animation)`
  top: 0;

  @media (max-width: 768px) {
    top: 60vh;
  }
`;
