import * as S from "./styles";

import { Events } from "./events";
import { useState } from "react";
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

  const transition = useTransition(openCard, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <>
      {Events.map((evento) => (
        <S.Card key={evento.id} onClick={() => setOpenCard(evento)}>
          <S.Header>
            <S.Title>{evento.titulo}</S.Title>
            <S.Date>
              {evento.dia}/
              {evento.mes}/
              {evento.ano}
            </S.Date>
          </S.Header>
          <S.Body>
            <S.Img src={evento.thumbnail} />
            <span></span>
          </S.Body>
          {/* <S.Footer>
            <Text secundarycolor={true}>{`Local: ${evento.local}`}</Text>
            <S.Buttom onClick={() => setOpenCard(evento)}>Detalhes</S.Buttom>
          </S.Footer> */}
        </S.Card>
      ))}
      {transition(
        (styles, item) =>
          item && (
            <S.ContainerCardFull>
              <S.Background onClick={() => setOpenCard(null)} />
              <S.CardFullSize style={styles}>
                <S.CardFullSizeHeader>
                  <S.CardFullTitle>{item.titulo}</S.CardFullTitle>
                  <S.Date>
                    <p>
                      {item.dia} /
                      {item.mes} /
                      {item.ano}
                    </p>
                  </S.Date>
                </S.CardFullSizeHeader>
                <S.CardFullBody>
                  <S.CardFullImg src={item.foto} />
                  <S.Infos>
                    <div>
                      <h4>Organização:</h4> <p>{item.organizacao}</p>
                    </div>
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
                    <div>
                      <h4>Informações adicionais:</h4>
                      <ul>
                        {item.infoAdd.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <S.ButtomClose onClick={() => setOpenCard(null)}>
                      Fechar
                    </S.ButtomClose>
                  </S.Infos>
                </S.CardFullBody>
              </S.CardFullSize>
            </S.ContainerCardFull>
          )
      )}
    </>
  );
};

export default CardEvent;
