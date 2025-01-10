import styled from "styled-components";
import colors from "../../styles/variables";

export const Card = styled.div`
  background-image: linear-gradient(315deg, ${colors.red_1}, ${colors.red_2});
  color: ${colors.white};

  max-width: 800px;
  width: 100%;
  height: 250px;
  padding: 32px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  margin-top: -125px;
  position: relative;
  z-index: 1;

  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 16px;
  }

  h3 {
    font-weight: 500;
    font-size: 36px;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  button {
    width: fit-content;
    font-size: 18px;
    padding: 16px 32px;
    background-color: ${colors.white};
    transition: all 0.3s;

    margin-top: 16px;
    color: ${colors.black};
    border: none;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }

    @media (max-width: 768px) {
      padding: 12px 16px;
    }
  }
`;
