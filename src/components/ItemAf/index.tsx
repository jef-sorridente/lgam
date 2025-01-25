import { useEffect, useRef, useState } from "react";
import * as S from "./styles";

import { FaArrowRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

// import { IoIosCloseCircle, IoIosAddCircle } from "react-icons/io";

// User photo default
import userPhotoDefaut from "./Images/user.png";

// import { Filiados } from "./affiliates";
import { Cidades } from "./affiliates";

type Equipe = {
  id: number;
  nome_equipe: string;
  foto_academia: string;
  foto_responsavel: string;
  alvara_valido: boolean;
  responsavel: string;
  endereco: string;
  contato: string;
  alunos_filiados: {
    id: number;
    nome_aluno: string;
    graduacao: string;
    data_nascimento: string | null;
    n_lgam: string | null;
    n_liga_nacional: string | null;
    foto: string | null;
  }[];
};

const ItemAf = () => {
  const [selectedEquipes, setSelectedEquipes] = useState<Equipe[]>([]);
  const [openFiliados, setOpenFiliados] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [openDetails, setOpenDetails] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [isActiveCity, setIsActiveCity] = useState<boolean>(false);
  const [isActiveDetails, setIsActiveDetails] = useState<boolean>(false);

  const [dynamicHeight, setDynamicHeight] = useState<{ [key: number]: number }>(
    {}
  );

  const tableRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleCidadeClick = (equipes: Equipe[]) => {
    setSelectedEquipes(equipes);
    setIsActiveCity(!isActiveCity);
  };

  const handleFiliadosClick = (equipeId: number) => {
    setOpenFiliados((prev) => ({
      ...prev,
      [equipeId]: !prev[equipeId],
    }));
  };

  const handleDetailsClick = (alunoID: number) => {
    setOpenDetails((prev) => ({
      ...prev,
      [alunoID]: !prev[alunoID],
    }));

    setIsActiveDetails(!isActiveDetails);
  };

  useEffect(() => {
    Object.keys(openFiliados).forEach((key) => {
      const id = parseInt(key);
      if (openFiliados[id] && tableRefs.current[id]) {
        const tableHeight = tableRefs.current[id]?.scrollHeight || 0;
        setDynamicHeight((prev) => ({
          ...prev,
          [id]: tableHeight,
        }));
      }
    });
  }, [openFiliados]);

  return (
    <>
      <S.Container>
        <S.ContainerSlide className={isActiveCity ? "active" : ""}>
          <div className="container-cidades">
            {/* Informações */}
            <S.InfosEsquerda>
              <div>
                <S.Title>Escolha o minicípio ao lado</S.Title>
                <p>
                  Associações filiadas à LGAM e em dia com suas obrigações
                  estaturárias.
                </p>
              </div>
              <S.CardFiliar>
                <S.Title>Fale conosco e filie-se!</S.Title>
                <a href="https://wa.me/5551985297929" target="_blank">
                  <S.Button type="button" title="Quero me filiar">
                    Quero me filiar
                  </S.Button>
                </a>
              </S.CardFiliar>
            </S.InfosEsquerda>
            {/* Informações */}

            {/* Container Cidades */}
            <S.ContainerCidades>
              {Cidades.cidade.map((cidade) => (
                <S.Cidades
                  key={cidade.nome}
                  onClick={() => handleCidadeClick(cidade.equipes)}
                >
                  {cidade.nome}
                </S.Cidades>
              ))}
            </S.ContainerCidades>
            {/* Container Cidades */}
          </div>

          {/* Container Equipes */}
          <S.ContainerEquipes>
            {selectedEquipes.length > 0 && (
              // Equipes
              <S.Equipe>
                {selectedEquipes.map((equipe) => {
                  const sortedFiliados = [...equipe.alunos_filiados].sort(
                    (a, b) => a.nome_aluno.localeCompare(b.nome_aluno)
                  );

                  return (
                    <div key={equipe.id}>
                      <S.EquipeHeader>
                        <S.FotosEquipe>
                          <img
                            src={equipe.foto_academia}
                            alt={equipe.nome_equipe}
                          />
                          <img
                            src={
                              equipe.foto_responsavel
                                ? equipe.foto_responsavel
                                : userPhotoDefaut
                            }
                            alt={equipe.nome_equipe}
                          />
                        </S.FotosEquipe>

                        <S.InfoEquipe>
                          <h2>Equipe {equipe.nome_equipe}</h2>
                          <p>
                            <strong>Alvará: </strong>
                            {equipe.alvara_valido ? "Válido" : "Inválido"}
                          </p>
                          <p>
                            <strong>Responsável: </strong>
                            {equipe.responsavel}
                          </p>
                          <p>
                            <strong>Endereço:</strong> {equipe.endereco}
                          </p>
                          <p>
                            <strong>Contato: </strong>
                            <a
                              href={`https://wa.me/${equipe.contato}`}
                              target="_blank"
                              title={`WhatsApp: ${equipe.nome_equipe}`}
                            >
                              {equipe.contato}
                            </a>
                          </p>
                        </S.InfoEquipe>

                        {/* Alunos Filiados */}
                        <h2
                          className="titulo-filiados"
                          onClick={() => handleFiliadosClick(equipe.id)}
                        >
                          Filiados da equipe <FaArrowRight />
                        </h2>

                        <S.ListaAlunos
                          ref={(el) => {
                            if (el) {
                              tableRefs.current[equipe.id] = el;
                            } else {
                              delete tableRefs.current[equipe.id];
                            }
                          }}
                          key={equipe.id}
                          dynamicheight={dynamicHeight[equipe.id] || 0}
                          className={`${
                            openFiliados[equipe.id] ? "active" : ""
                          }`}
                        >
                          <ul className="lista-header">
                            <li></li>
                            <li>Nome</li>
                            <li className="d-mobile-none">Graduação</li>
                            <li className="d-mobile-none">
                              Data de Nascimento
                            </li>
                          </ul>

                          {sortedFiliados.map((aluno) => (
                            <>
                              <ul
                                className={`lista-body ${
                                  isActiveDetails ? "active" : ""
                                }`}
                              >
                                <li className="foto-aluno">
                                  <img
                                    src={
                                      aluno.foto ? aluno.foto : userPhotoDefaut
                                    }
                                    alt={aluno.nome_aluno}
                                  />
                                </li>
                                <li className="list-item social">
                                  <p>{aluno.nome_aluno}</p>
                                  {/* <p>@instagram</p> */}
                                </li>
                                <li className="list-item social d-mobile-none">
                                  {/* <p>Professor / Atleta</p> */}
                                  <p>{aluno.graduacao}</p>
                                </li>
                                <li className="list-item d-mobile-none">
                                  {aluno.data_nascimento}
                                </li>
                                <li
                                  className="detalhes"
                                  onClick={() => handleDetailsClick(aluno.id)}
                                >
                                  Detalhes <GoPlus />
                                </li>

                                {openDetails[aluno.id] && (
                                  <ul className="detalhes-open">
                                    <li className="detalhes-item">
                                      <p>Nº registro LGAM:</p>
                                      <p>{aluno.n_lgam}</p>
                                    </li>
                                    <li className="detalhes-item">
                                      <p>Nº registro Liga Nacional: </p>
                                      <p>{aluno.n_liga_nacional}</p>
                                    </li>

                                    <li className="detalhes-item">
                                      <p>Graduação: </p>
                                      <p>
                                        {aluno.graduacao}
                                        {/* Professor / Atleta */}
                                      </p>
                                    </li>
                                    <li className="detalhes-item">
                                      <p> Data de Nascimento: </p>
                                      <p>{aluno.data_nascimento}</p>
                                    </li>
                                  </ul>
                                )}
                              </ul>
                            </>
                          ))}
                        </S.ListaAlunos>
                      </S.EquipeHeader>
                      <hr />
                    </div>
                  );
                })}
              </S.Equipe>
              // Equipes
            )}

            <button
              className="voltar"
              title="voltar"
              type="button"
              onClick={() => {
                handleCidadeClick([]);
              }}
            >
              Volta para os municípios
            </button>
            {/* Botão Voltar */}
          </S.ContainerEquipes>
        </S.ContainerSlide>
      </S.Container>
    </>
  );
};

export default ItemAf;
