import { useState } from "react";
import * as S from "./styles";
import imageteste from "../../assets/images/perfil.png";

const ItemAf = () => {
  const [openItem, setOpenItem] = useState(false);

  return (
    <>
      <S.Container>
        <S.Header>
          <S.HeaderItem>Nome</S.HeaderItem>
          <S.HeaderItem>Academia</S.HeaderItem>
          <S.HeaderItem>Dan</S.HeaderItem>
          <S.HeaderItem>Data de Nascimento</S.HeaderItem>
          <S.HeaderItem>Detalhes</S.HeaderItem>
        </S.Header>
        <S.ItemContainer>
          <S.Item>Jeferson Soares</S.Item>
          <S.Item>Kim</S.Item>
          <S.Item>2º dan</S.Item>
          <S.Item>15/06/1999</S.Item>
          <S.Action onClick={() => setOpenItem(true)}>+</S.Action>
        </S.ItemContainer>
      </S.Container>
      {openItem && (
        <S.ContainerInfos>
          <S.Infos>
            <S.Img src={imageteste} alt="Foto de perfil" />
            <div>
              <h2>Jeferson Soares</h2>
              <p>Academia: Kim Yu Shin</p>
              <p>Localidade: Novo Hamburgo</p>
              <p>Faixa: Faixa Preta 2º Dan</p>
              <p>Nascimento: 15/06/1999</p>
              <p>Nº de Inscrição: 195198198</p>
              <p>Mestre: Francisco Chagas</p>
            </div>
          </S.Infos>
          <span onClick={() => setOpenItem(false)}>X</span>
        </S.ContainerInfos>
      )}
    </>
  );
};

export default ItemAf;
