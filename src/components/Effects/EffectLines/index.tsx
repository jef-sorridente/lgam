import lines from "../../../assets/animation/lines.json";
import { Animation, ContainerAnimation } from "./styles";

const EffectLines = () => (
  <ContainerAnimation>
    <Animation animationData={lines} loop={false} autoplay={true} />
  </ContainerAnimation>
);

export default EffectLines;
