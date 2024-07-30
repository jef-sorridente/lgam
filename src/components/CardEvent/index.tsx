import Text from "../Text";
import * as S from "./styles";

type Props = {
  title: string;
  day: number;
  month: string;
  location: string;
};

const CardEvent = ({ title, day, month, location }: Props) => (
  <S.Card>
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.Date>
        <S.Day>{day}</S.Day>
        <S.Month>{month}</S.Month>
      </S.Date>
    </S.Header>
    <S.Body>
      <S.Img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikasYGlC5F6YYPC_dP8MkSkjv8UkwnbcxFB85bg3lTxgF6ND5dap_dTIlveto7rPJpZcEoM7e1aWffHeHiy-3l-Dzc5_xSB5T4lzKy_gZwJxanTVkgKsZimUWrKYfufE_e30WGU08SW0w/w640-h360-rw/images+%25282%2529.jpeg" />
    </S.Body>
    <S.Footer>
      <Text>{location}</Text>
    </S.Footer>
  </S.Card>
);

export default CardEvent;
