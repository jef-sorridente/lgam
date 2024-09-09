import { useEffect, useState } from "react";
import { useTransition } from "@react-spring/web";
import * as S from "./styles";

import { IoIosCloseCircle, IoIosAddCircle } from "react-icons/io";

import { Filiados } from "./affiliates";

type Filiado = {
  id: number;
  nome: string;
  academia: string | null;
  faixa: string;
  nascimento: string;
  localidade: string | null;
  mestre: string | null;
  registroLGAM: number | null;
  registroLN: number | null;
  foto: string;
};

const ItemAf = () => {
  const [selectedItem, setSelectedItem] = useState<Filiado | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  // const [sorted, setSorted] = useState(true);
  const isMobile = windowWidth <= 768;
  console.log(windowHeight);

  const transition = useTransition(selectedItem, {
    from: { height: 0 },
    enter: { height: isMobile ? windowHeight : 200 },
    leave: { height: 0 },
  });

  // const transitionMobile = useSpring({
  //   from: { high },
  // });

  useEffect(() => {
    const handleResizeW = () => setWindowWidth(window.innerWidth);
    const handleResizeH = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResizeW);
    window.addEventListener("resize", handleResizeH);
    return () => {
      window.removeEventListener("resize", handleResizeW);
      window.removeEventListener("resize", handleResizeH);
    };
  }, []);

  const sortedFiliados = [...Filiados].sort((a, b) =>
    // sorted ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome)
    a.nome.localeCompare(b.nome)
  );

  // const handleSorted = () => {
  //   setSorted(!sorted);
  // };

  return (
    <>
      <S.Container>
        <S.Header>
          {isMobile ? (
            <>
              <li>Nome</li>
              <li>Detalhes</li>
            </>
          ) : (
            <>
              <li>Nome</li>
              <li>Academia</li>
              <li>Dan</li>
              <li>Data de Nascimento</li>
              <li>Detalhes</li>
            </>
          )}
        </S.Header>
        <S.Body>
          {sortedFiliados.map((filiado) => (
            <S.LineTableDefault key={filiado.id}>
              {isMobile ? (
                <>
                  <li>{filiado.nome}</li>

                  <S.Action onClick={() => setSelectedItem(filiado)}>
                    <IoIosAddCircle />
                  </S.Action>
                </>
              ) : (
                <>
                  <li>{filiado.nome}</li>
                  <li>{filiado.academia}</li>
                  <li>{filiado.faixa}</li>
                  <li>{filiado.nascimento}</li>
                  <S.Action onClick={() => setSelectedItem(filiado)}>
                    <IoIosAddCircle />
                  </S.Action>
                </>
              )}
            </S.LineTableDefault>
          ))}
        </S.Body>
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

                <IoIosCloseCircle onClick={() => setSelectedItem(null)} />
              </S.Infos>
            </S.ContainerInfos>
          )
      )}
    </>
  );
};

export default ItemAf;
