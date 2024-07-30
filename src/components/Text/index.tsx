import * as S from "./styles";

export type Props = {
  children: string;
  secundarycolor?: boolean;
};

const Text = ({ children, secundarycolor }: Props) => (
  <S.Text secundarycolor={secundarycolor} children={children}></S.Text>
);

export default Text;
