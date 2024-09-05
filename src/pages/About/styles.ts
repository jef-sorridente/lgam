import styled from "styled-components";

import Lottie from "lottie-react";
import variables from "../../styles/variables";

type ConatinerSectionProps = {
  flexDirection?: "collum" | "column-reverse";
};

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

export const AnimationLines = styled(Animation)`
  top: 20vh;

  @media (max-width: 768px) {
    top: 60vh;
  }
`;

export const AnimationCircle = styled(Animation)`
  bottom: 0;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  animation: anim-opacity 1s ease both;

  @media (max-width: 768px) {
    padding: 100px 0;
    gap: 100px;
  }
`;

export const ConatinerSection = styled.div<ConatinerSectionProps>`
  display: flex;
  flex-direction: ${(p) => p.flexDirection === "collum" && "column"};
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: calc(100vh - 96px);

  @media (max-width: 768px) {
    height: 100%;
    align-items: center;
    gap: 32px;
    flex-direction: ${(p) =>
      p.flexDirection === "column-reverse" ? "column-reverse" : "column"};
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 16px;
  padding: 16px;
  position: relative;
  background: rgba(27, 27, 31, 0.9);
  border-radius: 16px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 50%;

  border-end-start-radius: 25%;
  border-end-end-radius: 40%;

  @media (max-width: 1024px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 64px;
  margin: 64px 16px 0 16px;
  border-radius: 16px;
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
