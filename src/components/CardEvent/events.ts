import sapiranga from "../../assets/images/sapiranga.jpg";
import novoHamburgo from "../../assets/images/novoHamburgo.jpg";

import thumb_1 from "../../assets/images/Events/eventos_thumb_1.png";
import thumb_2 from "../../assets/images/Events/eventos_thumb_3.png";

export const Events = [
  {
    id: 1,
    titulo: "1° Torneio Interno de Sapiranga",
    dia: "15",
    mes: "09",
    ano: "2024",
    local: "Rua Doutel de Andrade, 64 - Sapiranga",
    thumbnail: thumb_1,
    foto: sapiranga,
    inicio: "9 hrs",
    contato: [],
    infoAdd: [],
    organizacao: "",
    modalidades: ["Poom sae", "Sang Min Cho", "Kiorugui "],
  },
  {
    id: 2,
    titulo: "13° Open Kim Yu Shin",
    dia: "9 e 10",
    mes: "11",
    ano: "2024",
    local: "Ginásio Municipal de Novo Hamburgo",
    thumbnail: thumb_2,
    foto: novoHamburgo,
    inicio: "9 hrs",
    contato: ["51 9 8529-7929", "51 9 9546-7409"],
    infoAdd: [
      "Manhã do dia 9: Troca de faixa",
      "Tarde do dia 9: Poom sae",
      "Dia 10: Lutas",
    ],
    organizacao: "Kim Yu Shin",
    modalidades: ["Poom sae", "Kiorugui "],
  },
];
