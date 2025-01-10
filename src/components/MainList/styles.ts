import styled from "styled-components";
import colors from "../../styles/variables";
import { darken } from "polished";

export const List = styled.ul`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    width: 100vw;
    padding-top: 80px;
    height: 100vh;
    top: 0;
    left: 0;
    align-items: center;
    background-color: ${colors.black};
  }
`;

export const ItemList = styled.li`
  font-weight: 500;
  cursor: pointer;

  a {
    font-size: 18px;
    color: ${colors.white};
    transition: all 0.3s;

    &.active {
      position: relative;
      ::before {
        background-color: ${colors.red_1};
        width: 100%;
        height: 4px;
        border-radius: 2px;
        position: absolute;
        bottom: -5px;
        left: 0;
        content: "";
      }
    }
  }

  a:hover {
    color: ${darken(0.2, colors.white)};
  }
`;
