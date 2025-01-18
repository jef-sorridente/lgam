import * as S from "./styles";

import { Events } from "./events";
import { useEffect, useState } from "react";
import { useTransition } from "@react-spring/web";

type Events = {
  id: number;
  titulo: string;
  dia: string;
  mes: string;
  ano: string;
  local: string;
  thumbnail: string;
  foto: string;
  inicio: string;
  contato: string[];
  infoAdd: string[];
  organizacao: string;
  modalidades: string[];
};

const CardEvent = () => {
  const [openCard, setOpenCard] = useState<Events | null>(null);
  const [swiperOpen, setSwiperOpen] = useState<boolean>(false);
  const [eventosAgrupados, setEventosAgrupados] = useState<any>({});

  useEffect(() => {
    const agrupados = Events.reduce((acc, evento) => {
      if (!acc[evento.ano]) {
        acc[evento.ano] = [];
      }
      acc[evento.ano].push(evento);
      return acc;
    }, {});

    setEventosAgrupados(agrupados);
  }, []);

  useEffect(() => {
    if (swiperOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [swiperOpen]);

  const transition = useTransition(openCard, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <>
      {Object.keys(eventosAgrupados).map((ano) => (
        <div key={ano} className="container-year">
          <h2 className="year">Eventos de {ano}</h2>
          <div className="card-container">
            {eventosAgrupados[ano].map((evento) => (
              <S.Card
                key={evento.id}
                onClick={() => {
                  setOpenCard(evento);
                  setSwiperOpen(true);
                }}
              >
                <S.Header>
                  <S.Title>{evento.titulo}</S.Title>
                  <S.Date>
                    {evento.dia && evento.dia + "/"}
                    {evento.mes}/{evento.ano}
                  </S.Date>
                </S.Header>
                <S.Body>
                  <S.Img src={evento.thumbnail} />
                  <span></span>
                </S.Body>
              </S.Card>
            ))}
          </div>
        </div>
      ))}
      {transition(
        (styles, item) =>
          item && (
            <S.ContainerCardFull>
              <S.CardFullSize style={styles}>
                <S.CardFullSizeHeader>
                  <S.CardFullTitle>{item.titulo}</S.CardFullTitle>
                  <S.Date>
                    <p>
                      {item.dia}/{item.mes}/{item.ano}
                    </p>
                  </S.Date>
                </S.CardFullSizeHeader>
                {/* Header */}

                <S.CardFullBody>
                  <S.CardFullImg src={item.foto} />
                  <S.Infos>
                    {item.organizacao && (
                      <div>
                        <h4>Organização:</h4> <p>{item.organizacao}</p>
                      </div>
                    )}

                    <div>
                      <h4>Data:</h4> <p>{`${item.dia} de ${item.mes}`}</p>
                    </div>
                    <div>
                      <h4>Inicio:</h4> <p>{item.inicio}</p>
                    </div>
                    <div>
                      <h4>Local:</h4> <p>{item.local}</p>
                    </div>
                    <div>
                      <h4>Contato:</h4>
                      <ul>
                        {item.contato.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Modalidades:</h4>
                      <ul>
                        {item.modalidades.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    </div>
                    {item.infoAdd.length > 0 && (
                      <div>
                        <h4>Informações adicionais:</h4>
                        <ul>
                          {item.infoAdd.map((i, index) => (
                            <li key={index}>{i}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </S.Infos>
                </S.CardFullBody>
                {/* Body */}
              </S.CardFullSize>
              <S.ButtomClose
                onClick={() => {
                  setOpenCard(null);
                  setSwiperOpen(false);
                }}
              >
                Voltar
              </S.ButtomClose>
              {/* Botão Fechar */}
            </S.ContainerCardFull>
          )
      )}
    </>
  );
};

export default CardEvent;
