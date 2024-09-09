import { NavLink } from "react-router-dom";
import * as S from "./styles";

type Props = {
  onItemClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MainList = ({ onItemClick }: Props) => {
  return (
    <S.List>
      <S.ItemList>
        <NavLink to="/" onClick={onItemClick}>
          Sobre
        </NavLink>
      </S.ItemList>

      <S.ItemList>
        <NavLink to="/eventos" onClick={onItemClick}>
          Eventos
        </NavLink>
      </S.ItemList>
      <S.ItemList>
        <NavLink to="/galeria" onClick={onItemClick}>
          Galeria
        </NavLink>
      </S.ItemList>
      <S.ItemList>
        <NavLink to="/filiados" onClick={onItemClick}>
          Filiados
        </NavLink>
      </S.ItemList>
      {/* <S.ItemList>
        <NavLink to="#contato" onClick={onItemClick}>
          Contato
        </NavLink>
      </S.ItemList> */}
    </S.List>
  );
};

export default MainList;
