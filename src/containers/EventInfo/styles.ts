import styled from "styled-components";

export const Container = styled.section`
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  gap: 100px;

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
  gap: 2%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;
