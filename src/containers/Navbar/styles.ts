import styled from "styled-components";

export const Header = styled.header`
  background-color: #1b1b1ff2;
  position: sticky;
  top: 0;
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
