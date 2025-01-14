import styled from "styled-components";

import Lottie from "lottie-react";
import colors from "../../styles/variables";

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
  /* animation: anim-opacity 1s ease both; */
  gap: 200px;

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
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    height: 100%;
    align-items: center;
    gap: 16px;
    flex-direction: ${(p) =>
      p.flexDirection === "column-reverse" ? "column-reverse" : "column"};
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 8px;
  padding: 16px;
  position: relative;
  border-radius: 16px;

  h2 {
    color: ${colors.white};

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  button {
    width: fit-content;
    font-size: 18px;
    padding: 16px 32px;
    background-image: linear-gradient(
      to right,
      ${colors.red_1},
      ${colors.red_2}
    );
    transition: all 0.3s;

    margin-top: 8px;
    color: ${colors.white};
    border: none;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 450px;
  width: 100%;

  border-end-start-radius: 25%;
  border-end-end-radius: 40%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageMobilde = styled(Image)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin: 16px auto;
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

  h2 {
    width: 100%;
    text-align: center;
    color: ${colors.white} !important;
  }
`;

export const Icons = styled.span`
  font-size: 32px;
  a {
    color: ${colors.txtColor1};
    transition: 0.5s;
  }

  a:hover {
    transition: 0.5s;
    color: ${colors.txtColor3};
  }
`;

export const QuemSomos = styled(ConatinerSection)`
  background-color: ${colors.black};
  padding: 100px 0;
`;

export const Missao = styled(ConatinerSection)`
  padding: 100px 0;
  h2,
  p {
    color: ${colors.black};
  }
`;

export const Valores = styled(ConatinerSection)`
  padding: 100px 0;
  padding-bottom: 225px;
  background-color: ${colors.black};
  h2,
  p {
    color: ${colors.black};
  }
`;

export const Novidades = styled(ConatinerSection)`
  flex-direction: column;
  padding-top: 125px !important;
  padding-bottom: 100px !important;

  @media (max-width: 768px) {
    padding-top: 125px !important;
    padding-bottom: 100px !important;
  }
  h2 {
    color: ${colors.black} !important;
  }

  button {
    width: fit-content;
    font-size: 18px;
    padding: 16px 32px;
    background-image: linear-gradient(
      to right,
      ${colors.red_1},
      ${colors.red_2}
    );
    transition: all 0.3s;

    margin-top: 8px;
    color: ${colors.white};
    border: none;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }

    @media (max-width: 768px) {
      max-width: 250px;
      width: 100%;
    }
  }
`;

export const ContainerNovidades = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
