import styled from "styled-components";
// import variables from "../../styles/variables";
// import { animated } from "@react-spring/web";
import colors from "../../styles/variables";

export const Container = styled.div`
  /* max-width: 100%; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const ContainerSlide = styled.div`
  display: flex;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  transition: all ease-in 0.5s;

  &.active {
    margin-left: -100%;
  }

  .container-cidades {
    width: 100%;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const ContainerCidades = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  width: 100%;
  padding-left: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const ContainerEquipes = styled.div`
  position: relative;
  left: 0;
  /* max-width: 1000px; */
  width: 100%;
  margin-right: -100%;
  color: ${colors.white};
  right: -100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: start;
  }

  .voltar {
    position: absolute;
    right: 0;

    font-size: 20px;
    padding: 16px;
    background-image: linear-gradient(to right, #e9272e, #c71c22);
    transition: all 0.3s;
    color: #fbfbfb;
    border: none;
    border-radius: 16px;
    cursor: pointer;

    height: fit-content;

    @media (max-width: 768px) {
      position: relative;
      font-size: 16px;
      margin-bottom: 5vw;
    }
  }
`;

export const InfosEsquerda = styled.div`
  width: 350px;
  height: 350px;
  color: ${colors.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: 768px) {
    height: fit-content;
    gap: 32px;
    width: 100%;
  }
`;

export const CardFiliar = styled.div`
  /* margin-top: 100px; */
  background-color: ${colors.white};
  color: ${colors.black};

  padding: 32px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
  }

  &.right {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 88px;
    width: 300px;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
`;

export const Button = styled.button`
  background-image: linear-gradient(to left, ${colors.red_1}, ${colors.red_2});
  color: ${colors.white};
  padding: 16px;

  font-size: 20px;
  font-weight: 600;

  border-radius: 16px;
  border: none;

  box-shadow: -5px 5px 5px rgb(0, 0, 0, 0.25);

  transition: all ease 0.5s;

  &:hover {
    filter: brightness(1.2);
  }

  cursor: pointer;
`;

export const Cidades = styled.div`
  background-color: ${colors.white};
  padding: 16px 32px;
  border-radius: 8px;
  max-width: 300px;
  width: calc(50% - 16px);
  height: min-content;

  font-weight: 500;

  cursor: pointer;

  transition: all ease 0.5s;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Equipe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 64px;

  hr {
    border: none;
    border-bottom: 1px solid ${colors.red_1};
    width: 100%;
  }
`;

export const EquipeHeader = styled.div`
  .titulo-filiados {
    margin-top: 64px;
    margin-bottom: 32px;

    display: flex;
    align-items: center;
    gap: 12px;

    cursor: pointer;

    svg {
      transition: all ease 0.3s;
    }

    &:hover svg {
      rotate: 90deg;
    }
  }
`;

export const ListaAlunos = styled.div`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.black};

  border-radius: 16px;
  margin: 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  .lista-header,
  .lista-body {
    display: grid;
    grid-template-columns: 8% 42% 20% 20% 10%;
    grid-template-rows: auto;
    padding: 16px;
    border-bottom: 1px solid #dadada;

    @media (max-width: 768px) {
      grid-template-columns: 20% 60% 20%;
    }

    &:last-child {
      border: none;
    }

    .foto-aluno {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .list-item {
      display: flex;
      align-items: center;

      &.social {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;
        gap: 4px;
      }

      &.d-mobile-none {
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }

  .lista-header {
    font-weight: 500;
  }

  .detalhes {
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      color: rgb(115, 115, 115);
    }

    @media (max-width: 768px) {
      align-items: start;
      margin-top: 8px;
    }
  }

  .detalhes-open {
    grid-column: 2 / span 4;

    display: flex;
    flex-direction: column;
    padding-top: 6px;
    display: flex;
    /* flex-direction: column; */
    gap: 10px;

    .detalhes-item {
      display: flex;
      p {
        margin-right: 4px;
      }
    }
  }

  .d-mobile-none {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const FotosEquipe = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    object-position: top;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }
`;

export const InfoEquipe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: 600;
  }
`;

// export const InfosDireita = styled.div`
//   position: relative;
//   height: min-content;
//
// `;
