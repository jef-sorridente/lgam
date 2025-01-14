import * as S from "./styles";

export type Props = {
  children: string;
};

const Text = ({ children }: Props) => (
  <S.Text children={children}></S.Text>
);

export default Text;
