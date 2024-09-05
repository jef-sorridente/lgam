import Lottie from "lottie-react";
import styled from "styled-components";

export const ContainerAnimation = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export const Animation = styled(Lottie)`
  position: relative;
  left: 0;
  right: 0;
  z-index: -2;
`;

export const AnimationCircle = styled(Animation)`
  bottom: 0;
`;
