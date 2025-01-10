import image from "../../assets/images/img.png";
import imgSobre from "../../assets/images/imgSobre.webp";
import CardBanner from "../../components/CardBanner";
import CardNews from "../../components/CardNews";
import CardVal from "../../components/CardVal";

import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

import { Valores } from "./val";

const About = () => {
  const Items = [];

  for (let i = 0; i < 4; i++) {
    Items.push(<CardNews key={i} />);
  }

  return (
    <>
      {/* Quem somos */}
      <S.QuemSomos>
        <S.ConatinerSection className="container">
          <S.ContainerTexts>
            <Title>Quem somos?</Title>
            <S.ImageMobilde
              src={imgSobre}
              alt="Mestres Fransico Chagas e Eliane de Avila"
            />
            <Text secundarycolor={true}>
              Fundada em 2015 pelos mestres Eliane Padilha e Francisco Chagas, a
              Liga Gaúcha de Artes Marciais é uma organização dedicada a
              promover a prática e o conhecimento das artes marciais. Nosso
              objetivo é tornar a arte marcial acessível a todos, de forma
              estruturada e inclusiva.
            </Text>
            <strong>
              <Text secundarycolor={true}>
                Junte-se a nós na jornada da autodescoberta, disciplina e
                superação!
              </Text>
            </strong>
            <button type="button" title="Mais sobre nós">
              Mais sobre nós
            </button>
          </S.ContainerTexts>
          <S.Image
            src={imgSobre}
            alt="Mestres Fransico Chagas e Eliane de Avila"
          />
        </S.ConatinerSection>
      </S.QuemSomos>
      {/* Quem somos */}

      {/* Missão */}
      <S.Missao>
        <S.ConatinerSection
          className="container"
          flexDirection="column-reverse"
        >
          <S.Image src={image} alt="Lutadores" />
          <S.ContainerTexts>
            <Title>missão</Title>
            <S.ImageMobilde src={image} alt="Lutadores" />
            <strong>
              <Text>
                Promover o conhecimento e desenvolvimento através do esporte!
              </Text>
            </strong>
            <Text>
              Temos como missão criar oportunidades de conhecimento e
              desenvolvimento para pessoas de todas as idades. Nossa visão
              abrange crianças, adolescentes, jovens e adultos, tanto dentro
              quanto fora do âmbito esportivo.
            </Text>
            <Text>
              Acreditamos que o esporte deve ser acessível a todos,
              independentemente de suas limitações físicas ou condições
              financeiras. Portanto, promovemos a inclusão social, incentivando
              qualquer pessoa a participar e desfrutar dos benefícios do
              esporte.
            </Text>
          </S.ContainerTexts>
        </S.ConatinerSection>
      </S.Missao>
      {/* Missão */}

      {/* Valores */}
      <S.Valores>
        <S.ConatinerSection className="container" flexDirection="collum">
          <S.ContainerCards>
            <Title>Valores</Title>
            {Valores &&
              Valores.map((item) => (
                <CardVal key={item.id} title={item.title} text={item.text} />
              ))}
          </S.ContainerCards>
        </S.ConatinerSection>
      </S.Valores>
      {/* Valores */}

      {/* CardBanner */}
      <CardBanner />
      {/* CardBanner */}

      {/* Novidades */}
      <S.Novidades className="container">
        <Title>novidades</Title>
        <S.ContainerNovidades>{Items}</S.ContainerNovidades>
        <button>Veja todas novidades</button>
      </S.Novidades>
      {/* Novidades */}
    </>
  );
};

export default About;
