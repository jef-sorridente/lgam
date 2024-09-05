import CardEvent from "../../components/CardEvent";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

import EffectLines from "../../components/Effects/EffectLines";

const EventosInfo = () => (
  <S.Container>
    <EffectLines />
    <S.ConatinerSection>
      <Title>Eventos</Title>
      <Text>Fique por dentro dos nosso eventos, seminários e cursos!</Text>
    </S.ConatinerSection>
    <S.ContainerCard>
      <CardEvent />
    </S.ContainerCard>
  </S.Container>
);

export default EventosInfo;
