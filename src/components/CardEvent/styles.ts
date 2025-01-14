import styled from "styled-components";
import variables from "../../styles/variables";
import { animated } from "@react-spring/web";
import colors from "../../styles/variables";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;

  cursor: pointer;

  &:hover span {
    opacity: 0.4;
  }

  /* @media (max-width: 1024px) {
    width: 49%;
  }*/

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  z-index: 1;

  width: 100%;
  height: 100%;

  text-align: center;
`;

export const Title = styled.h3`
  width: 100%;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Date = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.white};
`;

export const Body = styled.main`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 8px;

  span {
    width: 100%;
    height: 100%;
    background-color: #1d1d1d;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;

    transition: all 0.5s ease;
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

export const Buttom = styled.button`
  padding: 6px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: ${colors.white};
  background-color: ${variables.txtColor3};
  cursor: pointer;
`;

export const ContainerCardFull = styled.div`
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${colors.black};
`;

export const CardFullSize = styled(animated.div)`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 32px;

  @media (max-width: 768px) {
    overflow-y: scroll;
  }
`;

export const CardFullSizeHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 84px;
  margin-bottom: 16px;
`;

export const CardFullTitle = styled.h3`
  font-size: 28px;
  text-transform: uppercase;
  color: ${colors.white};
`;

export const CardFullBody = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40%;
  height: 550px;
  position: relative;
  color: ${colors.white};

  h4 {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: start;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    column-gap: 2%;
    row-gap: 10px;

    div {
      width: 49%;
    }
  }

  @media (max-width: 450px) {
    div {
      width: 100%;
    }
  }
`;

export const ButtomClose = styled(Buttom)`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #e9272e;
  transition: all 0.3s;
  color: #fbfbfb;
  border: 2px solid #e9272e;
  border-radius: 16px;
  cursor: pointer;

  height: fit-content;
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    rotate: 180deg;
  }

  @media (min-width: 768px) {
    right: 32px;
  }
`;

export const CardFullImg = styled.img`
  max-height: 550px;
  /* width: 100%; */

  border-radius: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
