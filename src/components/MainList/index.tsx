import { NavLink } from "react-router-dom";
import * as S from "./styles";

const MainList = () => (
  <S.List>
    <S.ItemList>
      <NavLink to="/">Sobre</NavLink>
    </S.ItemList>
    <S.ItemList>
      <NavLink to="/eventos">Eventos</NavLink>
    </S.ItemList>
    <S.ItemList>
      <NavLink to="/galeria">Galeria</NavLink>
    </S.ItemList>
    <S.ItemList>
      <NavLink to="/contato">Contato</NavLink>
    </S.ItemList>
  </S.List>
);

export default MainList;
