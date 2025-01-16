// Alunos Kim
import kim_logo from "./Images/equipes/kim.jpg";
import chico from "./Images/chico.jpg";
import alceni from "./Images/alceni.jpg";
import batista from "./Images/batista.jpg";
import eliane from "./Images/liane.jpg";
import joao from "./Images/joao.jpg";
import emanuele from "./Images/emauele.jpg";
import wellington from "./Images/wellington.jpg";

// The Flash
import eduardo from "./Images/eduardo.jpg";

// Spider
import spider from "./Images/equipes/spider.jpg";
import luis from "./Images/luis.jpg";

// Dragon
import dragon from "./Images/equipes/dragon.jpg";
import luciano from "./Images/luciano.jpg";

// Dragon
import mid from "./Images/equipes/mid.jpg";

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
          endereco: "Rua Bartolomeu de Gusmão 1411 - Canudos",
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
        {
          id: 5,
          nome_equipe: "Spider",
          foto_academia: spider,
          foto_responsavel: "",
          alvara_valido: true,
          responsavel: "Paulo Ferreira",
          endereco: "Rua Gen. Cândido Mariano da Silva Rondon, 668 - Rondônia",
          contato: "51 9 9589-5612",
          alunos_filiados: [
            {
              id: 1,
              nome_aluno: "Paulo Ferreira",
              graduacao: "",
              data_nascimento: "22/10/1975",
              n_lgam: "0033/2024",
              n_liga_nacional: "",
              foto: "",
            },
            {
              id: 2,
              nome_aluno: "Luis  Gustavo Chassot",
              graduacao: "1° Dan",
              data_nascimento: "10/08/2008",
              n_lgam: "",
              n_liga_nacional: "",
              foto: luis,
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
          foto_responsavel: eduardo,
          alvara_valido: true,
          responsavel: "Eduardo Flores",
          endereco: "Rua Caetano José Munhoz 306 - Vicentina Associação Ambav",
          contato: "51 9 9242-7544",
          alunos_filiados: [
            {
              id: 1,
              nome_aluno: "Eduardo Flores",
              graduacao: "2° Dan",
              data_nascimento: "13/11/1980",
              n_lgam: "",
              n_liga_nacional: "0363",
              foto: eduardo,
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
          foto_academia: mid,
          foto_responsavel: "",
          alvara_valido: true,
          responsavel: "André Felippe",
          endereco:
            "Rua do Governador Roberto Silveira 40 3 andar - Centro Macaé",
          contato: "51 9 8023-3734",
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
          foto_academia: dragon,
          foto_responsavel: luciano,
          alvara_valido: true,
          responsavel: "Luciano da Silva",
          endereco: "Rua Dr. Hans Varelmann, 205 - São Paulo, Montenegro - RS",
          contato: "51 9 9582-1591",
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
