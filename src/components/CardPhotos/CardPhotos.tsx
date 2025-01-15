import * as S from "./styles";
import { Photos } from "./photos";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// icons
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

type Photo = {
  id: number;
  title?: string;
  thamb?: string;
  photos?: string[];
};

const CardPhotos = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [photoSelect, setPhotoSelect] = useState<Photo | null>(null);
  const [swiperOpen, setSwiperOpen] = useState<boolean>(false);

  useEffect(() => {
    if (swiperOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [swiperOpen]);

  const closePhotos = () => {
    setPhotoSelect(null);
    setThumbsSwiper(null);
  };

  return (
    <>
      {Photos.map((photo) => (
        <S.Container
          key={photo.id}
          onClick={() => {
            setPhotoSelect(photo);
            setSwiperOpen(true);
          }}
        >
          <S.ContainerImg key={photo.id}>
            <S.Img src={photo.thamb} />

            <span></span>
          </S.ContainerImg>

          <S.ContainerText>
            <S.Title>{photo.title}</S.Title>
            <p>{photo.date}</p>
          </S.ContainerText>
        </S.Container>
      ))}

      {photoSelect && (
        <div className="containerSwiper">
          <S.ButtomClose
            onClick={() => {
              closePhotos();
              setSwiperOpen(false);
            }}
          >
            <FaArrowRight /> Voltar
          </S.ButtomClose>
          <Swiper
            spaceBetween={16}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {photoSelect.photos?.map((photo, i) => (
              <SwiperSlide key={i}>
                <S.Img className="swiper-image" src={photo} />

                <a
                  className="download-btn"
                  href={photo}
                  download={photo}
                  title="Fazer download"
                >
                  <MdOutlineFileDownload />
                </a>
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
