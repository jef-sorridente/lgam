import { useEffect, useState } from "react";
import { useSpring, useTransition } from "@react-spring/web";
import * as S from "./styles";

import { Filiados } from "./affiliates";

type Filiado = {
  id: number;
  nome: string;
  academia: string;
  faixa: string;
  nascimento: string;
  localidade: string;
  mestre: string;
  registroLGAM: number | null;
  registroLN: number | null;
  foto: string;
};

const ItemAf = () => {
  const [selectedItem, setSelectedItem] = useState<Filiado | null>(null);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const transition = useTransition(selectedItem, {
    from: { height: 0 },
    enter: { height: 200 },
    leave: { height: 0 },
  });

  // const transitionMobile = useSpring({
  //   from: { high },
  // });

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize <= 768;

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
        {Filiados.map((filiado) => (
          <S.ItemContainer key={filiado.id}>
            <S.Item>{filiado.nome}</S.Item>
            <S.Item>{filiado.academia}</S.Item>
            <S.Item>{filiado.faixa}</S.Item>
            <S.Item>{filiado.nascimento}</S.Item>
            <S.Action onClick={() => setSelectedItem(filiado)}>+</S.Action>
          </S.ItemContainer>
        ))}
      </S.Container>

      {transition(
        (styles, item) =>
          item && (
            <S.ContainerInfos style={styles}>
              <S.Infos>
                <S.Img src={item.foto} alt="Foto de perfil" />

                <S.InfosRow>
                  <h3>{item.nome}</h3>
                  <S.InfosCollum>
                    <div>
                      <h4>Academia:</h4>
                      <p>{item.academia}</p>
                    </div>
                    <div>
                      <h4>Localidade:</h4>
                      <p>{item.localidade}</p>
                    </div>
                    <div>
                      <h4>Faixa:</h4>
                      <p>{item.faixa}</p>
                    </div>
                    <div>
                      <h4>Nascimento:</h4>
                      <p>{item.nascimento}</p>
                    </div>
                  </S.InfosCollum>
                  <S.InfosCollum>
                    <div>
                      <h4>Nº registro LGAM:</h4>
                      <p>{item.registroLGAM}</p>
                    </div>
                    <div>
                      <h4>Nº registro Liga Nacional:</h4>
                      <p>{item.registroLN}</p>
                    </div>
                    <div>
                      <h4>Mestre:</h4>
                      <p>{item.mestre}</p>
                    </div>
                  </S.InfosCollum>
                </S.InfosRow>
                <span onClick={() => setSelectedItem(null)}>X</span>
              </S.Infos>
            </S.ContainerInfos>
          )
      )}

      {isMobile && <p>Mobile</p>}
    </>
  );
};

export default ItemAf;
