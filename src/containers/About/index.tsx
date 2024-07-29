import image from "../../assets/images/image.png";
import CardVal from "../../components/CardVal";
import Line from "../../components/Line";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./styles";

const Valores = [
  {
    id: 1,
    title: "Responsabilidade Social",
    text: "Prezamos pela responsabilidade social, contribuindo para a comunidade e promovendo ações que beneficiem a sociedade como um todo. Isso pode incluir projetos sociais, eventos beneficentes ou parcerias com instituições locais",
  },
  {
    id: 2,
    title: "Superação",
    text: "Acreditamos que a superação é fundamental no caminho das artes marciais. Encorajamos nossos membros a enfrentarem desafios, superarem limites pessoais e alcançarem seus objetivos, tanto dentro como fora do tatame.",
  },
  {
    id: 3,
    title: "Ética",
    text: "Nossa liga baseia-se em princípios éticos sólidos. Isso inclui respeito mútuo, honestidade, integridade e disciplina. Esperamos que todos os praticantes sigam esses valores em suas jornadas marciais.",
  },
  {
    id: 4,
    title: "Transparência",
    text: "Valorizamos a transparência em nossas ações e decisões. Isso significa comunicar claramente as políticas, regras e processos da liga, bem como manter uma relação aberta com os membros.",
  },
  {
    id: 5,
    title: "Dedicação",
    text: "A dedicação é essencial para o progresso nas artes marciais. Incentivamos nossos membros a se dedicarem aos treinos, ao estudo e ao aprimoramento contínuo.",
  },
  {
    id: 6,
    title: "Educação",
    text: "A LGAM oferece oportunidades de aprendizado constante. Isso pode incluir cursos, palestras, seminários e materiais educativos para aprimorar as habilidades técnicas e o conhecimento dos praticantes.",
  },
];

const About = () => (
  <>
    <S.Container>
      <S.ConatinerSection>
        <S.ContainerTexts>
          <Title>Quem somos?</Title>
          <Text>
            Fundada em 2024 pelos mestres Eliane Padilha e Francisco Chagas, a
            Liga de Artes Marciais é uma organização dedicada a promover a
            prática e o conhecimento das artes marciais. Nosso objetivo é tornar
            a arte marcial acessível a todos, de forma estruturada e inclusiva.
          </Text>
          <Text secundaryColor={true}>
            Junte-se a nós na jornada da autodescoberta, disciplina e superação!
          </Text>
        </S.ContainerTexts>
        <S.Image src={image} alt="" />
        <Line />
      </S.ConatinerSection>
      <S.ConatinerSection>
        <S.Image src={image} alt="" />
        <S.ContainerTexts>
          <Title>Nossa missão e Visão</Title>
          <Text secundaryColor={true}>
            Promover o conhecimento e desenvolvimento através do esporte!
          </Text>
          <Text>
            Temos como missão criar oportunidades de conhecimento e
            desenvolvimento para pessoas de todas as idades. Nossa visão abrange
            crianças, adolescentes, jovens e adultos, tanto dentro quanto fora
            do âmbito esportivo.
          </Text>
          <Text>
            Acreditamos que o esporte deve ser acessível a todos,
            independentemente de suas limitações físicas ou condições
            financeiras. Portanto, promovemos a inclusão social, incentivando
            qualquer pessoa a participar e desfrutar dos benefícios do esporte.
          </Text>
        </S.ContainerTexts>
      </S.ConatinerSection>
      <S.ConatinerSection>
        <S.ContainerCards>
          <Title>Valores</Title>
          {Valores &&
            Valores.map((item) => (
              <CardVal key={item.id} title={item.title} text={item.text} />
            ))}
        </S.ContainerCards>
      </S.ConatinerSection>
    </S.Container>
  </>
);

export default About;
