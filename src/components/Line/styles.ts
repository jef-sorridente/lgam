import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  rotate: -15deg;
  position: absolute;
  bottom: 100px;
  right: -100px;
  z-index: -100;
  filter: opacity(60%);
  width: 100%;
`;

const Line = styled.span`
  width: 100%;
  height: 100px;
  animation: anim 2s ease both;

  @keyframes anim {
    0% {
      width: 0%;
      opacity: 0%;
    }
    100% {
      width: 130%;
      opacity: 100%;
    }
  }

  @media (max-width: 768px) {
    height: 50px;

    @keyframes anim {
      0% {
        width: 0%;
        opacity: 0%;
      }
      100% {
        width: 150%;
        opacity: 100%;
      }
    }
  }
`;

export const Line1 = styled(Line)`
  background-color: #007d31;
  animation-delay: 0.2s;
`;

export const Line2 = styled(Line)`
  background-color: #e70b11;
  animation-delay: 0.1s;
`;

export const Line3 = styled(Line)`
  background-color: #f19f0c;
`;
