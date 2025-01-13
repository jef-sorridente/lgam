import CardEvent from "../../components/CardEvent";
import Title from "../../components/Title";
import * as S from "./styles";

import background from "../../assets/images/Home/background_3.webp";

const EventosInfo = () => (
  <>
    <S.ContainerImg>
      <S.Img src={background} alt="background" />
      <span></span>
      <S.ConatinerSection>
        <Title>Fique por dentro dos nosso</Title>
        <Title>eventos oficias</Title>
      </S.ConatinerSection>
    </S.ContainerImg>

    <S.Events>
      <S.Container className="container">
        <S.ContainerCard>
          <CardEvent />
        </S.ContainerCard>
      </S.Container>
    </S.Events>
  </>
);

export default EventosInfo;
