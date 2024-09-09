import EffectLines from "../../components/Effects/EffectLines";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

const Galery = () => (
  <S.Container className="container">
    <EffectLines />
    <div>
      <Title>Galeria de fotos</Title>
      <Text>Fique por dentro dos nosso eventos, seminários e cursos!</Text>
    </div>
    <S.ContainerCards>
      <Title>Em breve fotos de eventos</Title>
    </S.ContainerCards>
  </S.Container>
);

export default Galery;
