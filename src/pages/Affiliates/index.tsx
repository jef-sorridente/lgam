import Title from "../../components/Title";
import ItemAf from "../../components/ItemAf";
import background from "../../assets/images/Affiliates/background.webp";

import * as S from "./styles";
import Line from "../../components/Line";

const Affiliates = () => {
  return (
    <>
      <S.ContainerImg>
        <S.Img src={background} alt="background" />
        <span></span>
        <S.ConatinerSection>
          <Title>Filiados</Title>
        </S.ConatinerSection>
      </S.ContainerImg>

      <S.Gallery>
        <S.Container className="container">
          {/* <S.ContainerAffiliates> */}
          <ItemAf />
          {/* </S.ContainerAffiliates> */}
        </S.Container>
      </S.Gallery>
    </>
  );
};

export default Affiliates;
