import CardEvent from "../../components/CardEvent";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

const EventosInfo = () => (
  <S.Container>
    <S.ConatinerSection>
      <Title>Eventos</Title>
      <Text>Nossos eventos!</Text>
    </S.ConatinerSection>
    <S.ContainerCard>
      <CardEvent />
      <CardEvent />
      <CardEvent />
      <CardEvent />
      <CardEvent />
    </S.ContainerCard>
  </S.Container>
);

export default EventosInfo;
