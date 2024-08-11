import styled from "styled-components";
import variables from "../../styles/variables";

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

export const ContainerInfos = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 32px 350px;
  background-color: ${variables.bgColor3};
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Infos = styled.div`
  display: flex;
  gap: 32px;
`;

export const Img = styled.img`
  height: 100px;
`;
