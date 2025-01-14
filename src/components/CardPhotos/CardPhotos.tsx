import * as S from "./styles";
import { Photos } from "./photos";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

type Photo = {
  id: number;
  title?: string;
  thamb?: string;
  photos?: string[];
};

const CardPhotos = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [photoSelect, setPhotoSelect] = useState<Photo | null>(null);

  const closePhotos = () => {
    setPhotoSelect(null);
    setThumbsSwiper(null);
  };

  return (
    <>
      {Photos.map((photo) => (
        <S.Container onClick={() => setPhotoSelect(photo)}>
          <S.ContainerImg key={photo.id}>
            <S.Img src={photo.thamb} />

            <span></span>
          </S.ContainerImg>

          <S.ContainerText>
            <S.Title>{photo.title}</S.Title>
          </S.ContainerText>
        </S.Container>
      ))}

      {photoSelect && (
        <div className="containerSwiper">
          <S.ButtomClose onClick={() => closePhotos()}>Fechar</S.ButtomClose>
          <Swiper
            spaceBetween={16}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {photoSelect.photos?.map((p, i) => (
              <SwiperSlide key={i}>
                <S.Img className="swiper-image" src={p} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            // loop={true}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {photoSelect.photos?.map((p, i) => (
              <SwiperSlide key={i}>
                <S.Img className="swiper-thumb" src={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default CardPhotos;
