import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(27, 27, 31, 0.1);
    backdrop-filter: blur(5px);
  }
  @media (max-width: 768px) {
    ::before {
      background: rgba(27, 27, 31, 0.3);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  max-width: 1366px;
  margin: auto;

  @media (max-width: 1366px) {
    padding: 0 5vw;
  }

  @media (max-width: 768px) {
  }
`;

export const IoCloseCustom = styled(IoClose)`
  z-index: 1;
`;
