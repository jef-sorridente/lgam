import Text from "../Text";
import * as S from "./styles";

const CardPhotos = () => (
  <S.Container>
    <S.ContainerImg>
      <S.Img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikasYGlC5F6YYPC_dP8MkSkjv8UkwnbcxFB85bg3lTxgF6ND5dap_dTIlveto7rPJpZcEoM7e1aWffHeHiy-3l-Dzc5_xSB5T4lzKy_gZwJxanTVkgKsZimUWrKYfufE_e30WGU08SW0w/w640-h360-rw/images+%25282%2529.jpeg"
        alt=""
      />
    </S.ContainerImg>
    <S.ContainerText>
      <Text secundarycolor={true}>
        Torneio Beneficiente Mestre Chico Chagas
      </Text>
    </S.ContainerText>
  </S.Container>
);

export default CardPhotos;
