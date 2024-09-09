import styled from "styled-components";
import variables from "../../styles/variables";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  color: ${variables.txtColor1};
  transition: 0.5s;

  :hover {
    color: ${variables.txtColor3};
    transition: 0.5s;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;

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
