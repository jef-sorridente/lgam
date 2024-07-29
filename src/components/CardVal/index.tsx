import Text from "../Text";
import * as S from "./styles";

import { FaCircle } from "react-icons/fa";

type Props = {
  title: string;
  text: string;
};

const CardVal = ({ title, text }: Props) => (
  <S.Card>
    <S.ContainerLine>
      <FaCircle color="#fff" fontSize={16} />
      <S.Line />
    </S.ContainerLine>
    <div>
      <S.Title>{title}</S.Title>
      <Text>{text}</Text>
    </div>
  </S.Card>
);

export default CardVal;
