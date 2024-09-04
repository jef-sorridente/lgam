import styled from "styled-components";
import variables from "../../styles/variables";
import { animated } from "@react-spring/web";

export const Container = styled.div`
  border: 1px solid ${variables.bgColor2};
  border-radius: 16px;
  margin: 64px 0;
`;

const LineTableDefault = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 10%;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
`;

export const Header = styled(LineTableDefault)`
  border-radius: 16px 16px 0 0;
  background-color: ${variables.bgColor2};
`;

export const HeaderItem = styled.li`
  font-weight: 500;
`;

export const ItemContainer = styled(LineTableDefault)`
  border-bottom: 1px solid ${variables.bgColor2};
  border-radius: 16px;
`;

export const Item = styled.li``;

export const Action = styled.li`
  margin-left: 30px;
  cursor: pointer;
`;

export const ContainerInfos = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;

  background-color: ${variables.bgColor3};
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

  > span {
    position: absolute;
    right: 0;
    top: 8;
    cursor: pointer;
  }
`;

export const InfosRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40px 1fr;

  h3 {
    font-size: 24px;
    grid-column: span 2;
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
    }
  }
`;

export const Img = styled.img`
  width: 168px;
  height: 168px;
  object-fit: cover;
`;
