import CardEvent from "../../components/CardEvent";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

import { Events } from "./events";

const EventosInfo = () => (
  <S.Container>
    <S.ConatinerSection>
      <Title>Eventos</Title>
      <Text>Nossos eventos!</Text>
    </S.ConatinerSection>
    <S.ContainerCard>
      {Events.map((ev) => (
        <CardEvent
          key={ev.id}
          title={ev.title}
          day={ev.day}
          month={ev.month}
          location={ev.location}
        />
      ))}
    </S.ContainerCard>
  </S.Container>
);

export default EventosInfo;
