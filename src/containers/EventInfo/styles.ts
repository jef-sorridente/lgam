import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 100px;
  animation: anim-opacity 1s ease both;

  @media (max-width: 768px) {
    padding: 100px 0;
    gap: 100px;
  }
`;

export const ConatinerSection = styled.div`
  text-align: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  animation: anim-opacity 2s ease both;
  gap: 2%;

  @media (max-width: 768px) {
    gap: 2%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
