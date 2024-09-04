import styled from "styled-components";

import Lottie from "lottie-react";
import variables from "../../styles/variables";

export const Animation = styled(Lottie)`
  position: relative;
  left: 0;
  right: 0;
  z-index: -2;
`;

export const AnimationLines = styled(Animation)`
  top: 20vh;
`;

export const AnimationCircle = styled(Animation)`
  bottom: 0;
`;

export const ContainerAnimation = styled.div`
  position: absolute;
  left: 0;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 100px 0;
    gap: 100px;
  }
`;

export const ConatinerSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: calc(100vh - 96px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 16px;
  padding: 16px;

  position: relative;
  animation: anim-opacity 1s ease both;
  background: rgba(27, 27, 31, 0.9);
  border-radius: 16px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 50%;
  animation: anim-opacity 2s ease both;
  border-end-start-radius: 25%;
  border-end-end-radius: 40%;

  @media (max-width: 1024px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 16px;
  background: rgba(27, 27, 31, 0.9);
  h2 {
    width: 100%;
    text-align: center;
  }
`;

export const Icons = styled.span`
  font-size: 32px;
  a {
    color: ${variables.txtColor1};
    transition: 0.5s;
  }

  a:hover {
    transition: 0.5s;
    color: ${variables.txtColor3};
  }
`;
