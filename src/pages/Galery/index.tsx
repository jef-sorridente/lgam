import CardPhotos from "../../components/CardPhotos/CardPhotos";
import Title from "../../components/Title";
import * as S from "./styles";

import background from "../../assets/images/Gallery/background.webp";

const Galery = () => (
  <>
    <S.ContainerImg>
      <S.Img src={background} alt="background" />
      <span></span>
      <S.ConatinerSection>
        <Title>Galeria de fotos</Title>
      </S.ConatinerSection>
    </S.ContainerImg>

    <S.Gallery>
      <S.Container className="container">
        <S.ContainerCard>
          <CardPhotos />
        </S.ContainerCard>
      </S.Container>
    </S.Gallery>
  </>
);

export default Galery;
