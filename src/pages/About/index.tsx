import image from "../../assets/images/img.png";
import imgSobre from "../../assets/images/imgSobre.webp";
import CardVal from "../../components/CardVal";

import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

import { Valores } from "./val";

import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";
import EffectLines from "../../components/Effects/EffectLines";
import EffectCircle from "../../components/Effects/EffectCircles";

const About = () => {
  return (
    <>
      <S.ContainerEffects>
        <EffectLines />
        <S.Container className="container">
          <S.ConatinerSection>
            <S.ContainerTexts>
              <Title>Quem somos?</Title>
              <Text>
                Fundada em 2015 pelos mestres Eliane Padilha e Francisco Chagas,
                a Liga de Artes Marciais é uma organização dedicada a promover a
                prática e o conhecimento das artes marciais. Nosso objetivo é
                tornar a arte marcial acessível a todos, de forma estruturada e
                inclusiva.
              </Text>
              <Text secundarycolor={true}>
                Junte-se a nós na jornada da autodescoberta, disciplina e
                superação!
              </Text>
              <S.Icons>
                <a href="http://www.facebook.com" target="_blank">
                  <RiFacebookCircleFill />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <RiInstagramFill />
                </a>
              </S.Icons>
            </S.ContainerTexts>

            <S.Image src={imgSobre} alt="" />
          </S.ConatinerSection>
          <S.ConatinerSection flexDirection="column-reverse">
            <S.Image src={image} alt="" />
            <S.ContainerTexts>
              <Title>Nossa missão e Visão</Title>
              <Text secundarycolor={true}>
                Promover o conhecimento e desenvolvimento através do esporte!
              </Text>
              <Text>
                Temos como missão criar oportunidades de conhecimento e
                desenvolvimento para pessoas de todas as idades. Nossa visão
                abrange crianças, adolescentes, jovens e adultos, tanto dentro
                quanto fora do âmbito esportivo.
              </Text>
              <Text>
                Acreditamos que o esporte deve ser acessível a todos,
                independentemente de suas limitações físicas ou condições
                financeiras. Portanto, promovemos a inclusão social,
                incentivando qualquer pessoa a participar e desfrutar dos
                benefícios do esporte.
              </Text>
            </S.ContainerTexts>
          </S.ConatinerSection>
          <S.ConatinerSection flexDirection="collum">
            <S.ContainerCards>
              <Title>Valores</Title>
              {Valores &&
                Valores.map((item) => (
                  <CardVal key={item.id} title={item.title} text={item.text} />
                ))}
            </S.ContainerCards>
          </S.ConatinerSection>
        </S.Container>
        <EffectCircle />
      </S.ContainerEffects>
    </>
  );
};

export default About;
