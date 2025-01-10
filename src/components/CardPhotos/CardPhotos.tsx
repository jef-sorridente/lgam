import Text from "../Text";
import * as S from "./styles";
import { Photos } from "./photos";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

type Photo = {
  id: number;
  title?: string;
  thamb?: string;
  photos?: string[];
};

const CardPhotos = () => {
  const [photoSelect, setPhotoSelect] = useState<Photo | null>(null);

  return (
    <>
      {Photos.map((photo) => (
        <S.Container onClick={() => setPhotoSelect(photo)}>
          <S.ContainerImg key={photo.id}>
            <S.Img src={photo.thamb} />
          </S.ContainerImg>

          <S.ContainerText>
            <Text secundarycolor={true}>{photo.title}</Text>
          </S.ContainerText>
        </S.Container>
      ))}

      {photoSelect && (
        <div className="containerSwiper">
          <S.ButtomClose onClick={() => setPhotoSelect(null)}>
            Fechar
          </S.ButtomClose>

          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {photoSelect.photos?.map((p, i) => (
              <SwiperSlide key={i}>
                <S.Img src={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default CardPhotos;
