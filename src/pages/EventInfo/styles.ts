import styled from "styled-components";
import colors from "../../styles/variables";

export const Events = styled.section`
  background-color: ${colors.black};
`;

export const Container = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 100px;
  /* height: 100vh; */
  /* animation: anim-opacity 1s ease both; */

  @media (max-width: 768px) {
    padding: 100px 0;
    gap: 100px;
  }
`;

export const ConatinerSection = styled.div`
  text-align: center;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16;

  width: 100%;
  height: 80vh;
  top: 0;
  left: 0;

  p,
  h2 {
    color: ${colors.white};
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: start;
  /* animation: anim-opacity 2s ease both; */

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 32px;
  }

  .year {
    font-size: 32px;
    color: ${colors.white};
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .container-year {
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const ContainerImg = styled.div`
  margin-top: -158px;
  max-height: 600px;
  height: 80vh;
  position: relative;
  overflow: hidden;

  span {
    position: absolute;
    width: 100%;
    height: 80vh;
    background-color: #1d1d1d;
    opacity: 0.8;
    top: 0;
    left: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
