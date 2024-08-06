import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;
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
  overflow: hidden;
  position: relative;
  animation: anim-opacity 1s ease both;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(27, 27, 31, 0.3);
    backdrop-filter: blur(5px);
  }

  @media (max-width: 768px) {
    ::before {
      background: rgba(27, 27, 31, 0.3);
    }
  }
`;

export const Image = styled.img`
  animation: anim-opacity 2s ease both;
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
