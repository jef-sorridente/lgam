import styled from "styled-components";
import colors from "../../styles/variables";

export const Card = styled.div`
  display: flex;
  gap: 8px;
  max-width: 500px;

  p {
    color: ${colors.white} !important;
  }
`;

export const Title = styled.h3`
  color: ${colors.white};
  line-height: 16px;
  margin-bottom: 8px;
`;

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Line = styled.div`
  background-color: #fff;
  width: 3px;
  height: 100%;
`;
