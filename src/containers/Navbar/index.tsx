import MainList from "../../components/MainList";
import Mark from "../../components/Mark";
import * as S from "./styles";

const Navbar = () => (
  <S.Header>
    <S.Content>
      <Mark />
      <MainList />
    </S.Content>
  </S.Header>
);

export default Navbar;
