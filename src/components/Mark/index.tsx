import icon from "../../assets/images/lgam.svg";
import * as S from "./styles";

const Mark = () => (
  <S.Container to={"/"}>
    <S.Title>
      <S.Image src={icon} alt="LGAM" />
    </S.Title>
  </S.Container>
);

export default Mark;
