import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 100px;
  height: 100vh;
  animation: anim-opacity 1s ease both;

  @media (max-width: 768px) {
    padding: 100px 0;
    gap: 100px;
  }
`;
