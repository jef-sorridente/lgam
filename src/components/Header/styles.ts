import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import colors from "../../styles/variables";

export const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 1200px) {
    padding: 0 5vw;
  }

  @media (max-width: 768px) {
  }
`;

export const IoCloseCustom = styled(IoClose)`
  z-index: 2;
  color: ${colors.white};
  cursor: pointer;
`;

export const FaBarsStaggeredCustom = styled(FaBarsStaggered)`
  z-index: 2;
  color: ${colors.white};
  cursor: pointer;
`;
