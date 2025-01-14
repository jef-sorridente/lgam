import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import colors from "../../styles/variables";

export const SwiperCustom = styled(Swiper)`
  margin-top: -158px;
  position: relative;

  .swiper-wrapper {
    :before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #1d1d1d;
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .swiper-pagination {
    z-index: 2;
    bottom: 32px;
    .swiper-pagination-bullet {
      width: 50px;
      border-radius: 8px;
      background-color: ${colors.white};
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: ${colors.red_1};
    }
  }
`;

export const SwiperSlideCustom = styled(SwiperSlide)`
  background-color: ${colors.black};
  max-height: 1000px;
  height: 95vh;
  padding: 0;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  color: ${colors.white};

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    max-width: 800px;
    width: 100%;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 24px;
  }

  button {
    font-size: 20px;
    padding: 16px 32px;
    background-image: linear-gradient(
      to right,
      ${colors.red_1},
      ${colors.red_2}
    );
    transition: all 0.3s;

    margin-top: 32px;
    color: ${colors.white};
    border: none;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;
