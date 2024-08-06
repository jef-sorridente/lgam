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

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5%;
`;
