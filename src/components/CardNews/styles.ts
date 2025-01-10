import styled from "styled-components";
import colors from "../../styles/variables";

export const Card = styled.div`
  max-width: 250px;
  width: 250px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .container-img {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    ::before {
      content: "";

      position: absolute;

      width: 100%;
      height: 100%;

      top: 0;
      left: 0;
      right: 0;

      background-color: #1d1d1d;
      opacity: 0.5;

      transition: all ease 0.3s;
    }
  }

  a {
    color: ${colors.black};

    display: flex;
    gap: 6px;
    align-items: center;

    transition: all ease 0.3s;

    path {
      transition: all ease 0.3s;
    }

    &:hover {
      color: ${colors.red_1};

      path {
        fill: ${colors.red_1};
      }
    }
  }
`;
