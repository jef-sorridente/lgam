import * as S from "./styles";

export type Props = {
  children: string;
  secundaryColor?: boolean;
};

const Text = ({ children, secundaryColor }: Props) => (
  <S.Text secundaryColor={secundaryColor} children={children}></S.Text>
);

export default Text;
