import styled from "styled-components";
import variables from "../../styles/variables";
import { animated } from "@react-spring/web";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.66%;
  background-color: ${variables.bgColor2};
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 27px;

  @media (max-width: 1024px) {
    width: 49%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  width: 100%;
  padding: 16px 0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 70px;
  padding: 2px;
  border-radius: 16px;
  background-color: ${variables.txtColor3};
  color: ${variables.bgColor1};
`;

export const Day = styled.h3`
  font-size: 24px;
`;

export const Month = styled.p`
  font-weight: bold;
`;

export const Body = styled.main`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 8px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

export const Buttom = styled.button`
  width: 100%;
  padding: 6px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: ${variables.bgColor1};
  background-color: ${variables.txtColor3};
  cursor: pointer;
`;

export const ContainerCardFull = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
  cursor: pointer;
`;

export const CardFullSize = styled(animated.div)`
  padding: 32px;
  margin-top: 96px;

  border-radius: 16px;
  background-color: ${variables.bgColor2};
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    overflow-y: scroll;
  }
`;

export const CardFullSizeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CardFullTitle = styled.h3`
  font-size: 28px;
  color: ${variables.txtColor3};
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

  @media (max-width: 768px) {
    width: 100%;
    justify-content: start;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    column-gap: 2%;
    row-gap: 16px;

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
  margin-top: 16px;
  width: 100%;
  position: absolute;
  bottom: 0px;

  @media (max-width: 768px) {
    position: static;
  }
`;

export const CardFullImg = styled.img`
  max-height: 550px;
  width: 100%;

  border-radius: 16px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
