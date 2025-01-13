import { useState } from "react";
import * as S from "./styles";

// import { IoIosCloseCircle, IoIosAddCircle } from "react-icons/io";

// import { Filiados } from "./affiliates";
import { Cidades } from "./affiliates";

type Equipe = {
  id: number;
  nome_equipe: string;
  alvara_valido: boolean;
  responsavel: string;
  endereco: string;
  contato: string;
  alunos_filiados: {
    id: number;
    nome_aluno: string;
    graduacao: string;
    data_nascimento: string | null;
    n_lgam: number | null;
    n_liga_nacional: number | null;
    foto: string | null;
  }[];
};

const ItemAf = () => {
  const [selectedEquipes, setSelectedEquipes] = useState<Equipe[]>([]);

  const handleCidadeClick = (equipes: Equipe[]) => {
    setSelectedEquipes(equipes);
  };

  return (
    <>
      <S.Container>
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
            <S.Button type="button" title="Quero me filiar">
              Quero me filiar
            </S.Button>
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
      </S.Container>

      {/* Container Equipes */}
      <S.ContainerEquipes>
        {selectedEquipes.length > 0 && (
          <S.Equipe>
            {selectedEquipes.map((equipe) => (
              <>
                <S.Title>Equipe {equipe.nome_equipe}</S.Title>

                <div>
                  {equipe.alunos_filiados.map((aluno) => (
                    <>{aluno.nome_aluno}</>
                  ))}
                </div>
              </>
            ))}
          </S.Equipe>
        )}
      </S.ContainerEquipes>
      {/* Container Equipes */}

      {/* Lista de Alunos Filiados */}

      {/* Lista de Alunos Filiados */}
    </>
  );
};

export default ItemAf;
