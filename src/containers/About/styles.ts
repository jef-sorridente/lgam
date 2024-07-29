import styled from "styled-components";

export const Container = styled.section`
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  gap: 200px;

  @media (max-width: 768px) {
    padding: 100px 0;
    gap: 100px;
  }
`;

export const ConatinerSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  height: 100%;
  background-color: #1b1b1ff2;
  border: 1px solid #1b1b1f;
`;

export const Image = styled.img`
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 64px;

  h2 {
    width: 100%;
    text-align: center;
  }
`;
