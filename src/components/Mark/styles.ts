import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Image = styled.img`
  max-width: 80px;

  @media (max-width: 768px) {
    max-width: 60px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  max-width: 200px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
