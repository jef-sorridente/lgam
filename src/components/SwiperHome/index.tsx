import { Pagination, Autoplay } from "swiper/modules";
import * as S from "./styles";
import "swiper/css";

import background_1 from "../../assets/images/Home/background_1.webp";
import background_2 from "../../assets/images/Home/background_2.webp";
import background_3 from "../../assets/images/Home/background_3.webp";

const SwiperHome = () => {
  return (
    <S.SwiperCustom
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      speed={500}
      pagination={{
        clickable: true,
      }}
      loop={true}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
    >
      <S.Text className="container">
        <h2>
          A força não vem da capacidade física, mas de uma vontade indomável.
        </h2>
        <p>“Mahatma Gandhi”</p>
        <a href="#contato">
          <button type="button" title="Entre em contato">Faça parte do nossa família</button>
        </a>
      </S.Text>
      <S.SwiperSlideCustom>
        <img src={background_1} alt="background" />
      </S.SwiperSlideCustom>
      <S.SwiperSlideCustom>
        <img src={background_2} alt="background" />
      </S.SwiperSlideCustom>
      <S.SwiperSlideCustom>
        <img src={background_3} alt="background" />
      </S.SwiperSlideCustom>
    </S.SwiperCustom>
  );
};

export default SwiperHome;
