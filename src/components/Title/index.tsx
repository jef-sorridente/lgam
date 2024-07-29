import * as S from "./styles";

type Props = {
  children: string;
};

const Title = ({ children }: Props) => <S.Title children={children}></S.Title>;

export default Title;
