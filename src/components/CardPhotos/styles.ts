import styled from "styled-components";

export const Container = styled.div`
  width: 49.75%;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #202127;
  cursor: pointer;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 10%;
`;

export const ContainerImg = styled.div`
  overflow: hidden;
  :hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

export const Img = styled.img`
  width: 100%;
  transition: 0.5s ease;
`;
