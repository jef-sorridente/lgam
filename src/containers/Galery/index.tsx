import CardPhotos from "../../components/CardPhotos/CardPhotos";
import Line from "../../components/Line";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

const Galery = () => (
  <S.Container>
    <Line />
    <div>
      <Title>Galeria de fotos</Title>
      <Text>Fique por dentro dos nosso eventos, seminários e cursos!</Text>
    </div>
    <S.ContainerCards>
      <CardPhotos />
      <CardPhotos />
      <CardPhotos />
      <CardPhotos />
      <CardPhotos />
      <CardPhotos />
    </S.ContainerCards>
  </S.Container>
);

export default Galery;
