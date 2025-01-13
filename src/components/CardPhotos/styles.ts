import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;

  cursor: pointer;

  &:hover span {
    opacity: 0.4;
  }

  @media (max-width: 1024px) {
    width: 49%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ContainerImg = styled.div`
  overflow: hidden;

  span {
    width: 100%;
    height: 100%;
    background-color: #1d1d1d;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;

    transition: all .5s ease;
  }

`;

export const Img = styled.img`
  width: 100%;
  transition: 0.5s ease;
`;

export const Buttom = styled.button`
  padding: 6px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: ${variables.bgColor1};
  background-color: ${variables.txtColor3};
  cursor: pointer;
`;

export const ButtomClose = styled(Buttom)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%);
`;
