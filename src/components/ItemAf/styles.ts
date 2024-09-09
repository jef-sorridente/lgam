import styled from "styled-components";
import variables from "../../styles/variables";
import { animated } from "@react-spring/web";

export const Container = styled.div`
  border-radius: 16px;
  margin: 64px 0;
`;

export const LineTableDefault = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 10%;
  width: 100%;
  justify-content: space-between;
  padding: 16px;

  li {
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    grid-template-columns: 80% 20%;
  }
`;

export const Header = styled(LineTableDefault)`
  border-radius: 16px 16px 0 0;
  background-color: ${variables.bgColor2};
  font-weight: bold;
`;

export const Body = styled.div`
  :last-child {
    border-radius: 0 0 16px 16px;
  }

  > ul:nth-child(odd) {
    background-color: ${variables.bgColor1};
  }

  > ul:nth-child(even) {
    background-color: ${variables.bgColor2};
  }
`;

export const Action = styled.li`
  margin-left: 30px;
  cursor: pointer;
`;

export const ContainerInfos = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 200px;

  background-color: ${variables.bgColor2};
  display: flex;
  justify-content: space-between;
  align-items: start;
  overflow: hidden;
`;

export const Infos = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: auto;
  display: flex;

  height: 200px;
  padding: 16px;
  gap: 32px;
  position: relative;

  @media (max-width: 1366px) {
    padding: 0 5vw;
  }

  > svg {
    font-size: 24px;
    position: absolute;
    right: 0;
    top: 8px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 120px 5vh 32px 5vh;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    > svg {
      font-size: 24px;
      position: absolute;
      right: 5vh;
      top: 90px;
      cursor: pointer;
    }
  }
`;

export const InfosRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40px 1fr;

  h3 {
    font-size: 24px;
    grid-column: span 2;
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const InfosCollum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div {
    display: flex;

    h4 {
      margin-right: 8px;
      margin-bottom: 2px;
    }
  }
`;

export const Img = styled.img`
  width: 168px;
  height: 168px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 90%;
  }
`;
