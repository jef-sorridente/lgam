import lines from "../../../assets/animation/lines.json";
import { AnimationLines, ContainerAnimation } from "./styles";

const EffectLines = () => (
  <ContainerAnimation>
    <AnimationLines animationData={lines} loop={false} autoplay={true} />
  </ContainerAnimation>
);

export default EffectLines;
