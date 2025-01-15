// Responsáveis e logo
import chico from "./Images/chico.jpg";
import kim_logo from "./Images/equipes/kim.jpg";

// Alunos Kim
import alceni from "./Images/alceni.jpg";
import batista from "./Images/batista.jpg";
import eliane from "./Images/liane.jpg";
import joao from "./Images/joao.jpg";
import emanuele from "./Images/emauele.jpg";
import wellington from "./Images/wellington.jpg";

// Alunos Dragon
import luciano from "./Images/luciano.jpg";

export const Cidades = {
  cidade: [
    {
      nome: "Novo Hamburgo",
      equipes: [
        {
          id: 1,
          nome_equipe: "Kim Yu Shin",
          foto_academia: kim_logo,
          foto_responsavel: chico,
          alvara_valido: true,
          responsavel: "Francisco Chagas da Luz",
          endereco: "Rua Bartolomeu de Gusmão 1411",
          contato: "51 9 9546-7409",
          alunos_filiados: [
            {
              id: 1,
              nome_aluno: "Alceni da Silva",
              graduacao: "2° Dan",
              data_nascimento: "22/10/1975",
              n_lgam: "0033/2024",
              n_liga_nacional: "",
              foto: alceni,
            },
            {
              id: 2,
              nome_aluno: "Alex Diniz Lopes",
              graduacao: "1° Dan",
              data_nascimento: "16/01/2001",
              n_lgam: "",
              n_liga_nacional: "935",
              foto: "",
            },
            {
              id: 3,
              nome_aluno: "Carlos Antonio Batista",
              graduacao: "Faixa Colorida",
              data_nascimento: "30/07/1973",
              n_lgam: "0031/2024",
              n_liga_nacional: "",
              foto: batista,
            },
            {
              id: 4,
              nome_aluno: "Eliane de Avila Padilha",
              graduacao: "4º Dan",
              data_nascimento: "16/05/1982",
              n_lgam: "0002/2024",
              n_liga_nacional: "",
              foto: eliane,
            },
            {
              id: 5,
              nome_aluno: "Emanuele Mariane Padilha da Luz",
              graduacao: "2º Dan",
              data_nascimento: "27/12/2009",
              n_lgam: "0034/2024",
              n_liga_nacional: "",
              foto: emanuele,
            },
            {
              id: 6,
              nome_aluno: "Francisco Chagas da Luz",
              graduacao: "5º Dan",
              data_nascimento: "22/12/1969",
              n_lgam: "0001/2024",
              n_liga_nacional: "3439",
              foto: chico,
            },
            {
              id: 7,
              nome_aluno: "João Viktor Garcia da Veiga",
              graduacao: "1º Dan",
              data_nascimento: "03/10/2008",
              n_lgam: "0032/2024",
              n_liga_nacional: "3439",
              foto: joao,
            },
            {
              id: 8,
              nome_aluno: "Wellington Bernardes",
              graduacao: "2º Dan",
              data_nascimento: "03/02/2003",
              n_lgam: "0030/2024",
              n_liga_nacional: "4080",
              foto: wellington,
            },
          ],
        },
      ],
    },
    {
      nome: "São Leopoldo",
      equipes: [
        {
          id: 2,
          nome_equipe: "The Flash",
          foto_academia: "",
          foto_responsavel: "",
          alvara_valido: true,
          responsavel: "Eduardo Flores",
          endereco: "",
          contato: "",
          alunos_filiados: [
            {
              id: 1,
              nome_aluno: "Eduardo Flores",
              graduacao: "2° Dan",
              data_nascimento: "13/11/1980",
              n_lgam: "",
              n_liga_nacional: "0363",
              foto: "",
            },
          ],
        },
      ],
    },
    {
      nome: "Sobradinho",
      equipes: [
        {
          id: 3,
          nome_equipe: "Mid Night Team",
          foto_academia: "",
          foto_responsavel: "",
          alvara_valido: true,
          responsavel: "André Felippe",
          endereco: "",
          contato: "",
          alunos_filiados: [
            {
              id: 1,
              nome_aluno: "André Felippe",
              graduacao: "1° Dan",
              data_nascimento: "15/05/1996",
              n_lgam: "",
              n_liga_nacional: "4048",
              foto: "",
            },
          ],
        },
      ],
    },
    {
      nome: "Montenegro",
      equipes: [
        {
          id: 4,
          nome_equipe: "Dragon",
          foto_academia: "",
          foto_responsavel: luciano,
          alvara_valido: true,
          responsavel: "Luciano da Silva",
          endereco: "",
          contato: "",
          alunos_filiados: [
            {
              id: 1,
              nome_aluno: "Luciano da Silva",
              graduacao: "2° Dan",
              data_nascimento: "07/11/1975",
              n_lgam: "",
              n_liga_nacional: "3704",
              foto: luciano,
            },
          ],
        },
      ],
    },
  ],
};
