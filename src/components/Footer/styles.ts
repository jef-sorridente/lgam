import styled from "styled-components";
import colors from "../../styles/variables";

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 60px;

  background: ${colors.black};
  color: ${colors.white};

  border-top: 1px solid ${colors.white};
`;

export const FooterTop = styled.div`
  max-width: 1100px;
  margin: auto;

  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 32px;
  }
`;
export const List = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  .logo {
    width: 150px;
    margin: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    li a {
      font-size: 16px;
    }
  }

  .arrow {
    color: ${colors.white};
    display: flex;
    align-items: center;
    gap: 6px;
    width: fit-content;

    @media (max-width: 768px) {
      width: max-content;
      margin: auto;
    }

    transition: all ease 0.3s;
    cursor: pointer;

    path {
      fill: ${colors.white};
      transition: all ease 0.3s;
    }

    &:hover {
      color: ${colors.red_1};
      & path {
        fill: ${colors.red_1};
      }
    }
  }

  .institucional {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .social {
    display: flex;
    align-items: center;
    gap: 6px;

    @media (max-width: 768px) {
      width: fit-content;
      margin: auto;
    }
  }

  .redes {
    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  &.d-mobilde-none {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const FooterBottom = styled.div`
  margin: auto;
  text-align: center;

  background-color: ${colors.red_1};
  padding: 16px;
  margin-top: 32px;

  p {
    margin-bottom: 8px;
  }

  a {
    color: ${colors.white};
    transition: all ease 0.5s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
