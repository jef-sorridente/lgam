import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  background-color: #202127;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 27px;

  @media (max-width: 768px) {
    width: 49%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #2b2f36;
  border-radius: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  max-width: 384px;
  width: 100%;
  padding: 16px;
  color: #fff;
  font-weight: 400;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100%;
  padding: 8px;
  border-radius: 16px;
  background-color: #fff;
  color: #2b2f36;
`;

export const Day = styled.h3`
  font-size: 32px;
`;

export const Month = styled.p`
  font-weight: bold;
`;

export const Body = styled.main`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #1b1b1f;
  border-radius: 0 0 16px 16px;
  padding: 16px;
`;
