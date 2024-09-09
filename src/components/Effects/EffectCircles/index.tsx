import { AnimationCircle, ContainerAnimation } from "./styles";
import { useInView } from "react-intersection-observer";
import circle from "../../../assets/animation/circle.json";

const EffectCircle = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
    threshold: 0.5,
  });

  return (
    <ContainerAnimation ref={ref}>
      {inView && (
        <AnimationCircle animationData={circle} loop={false} autoplay={true} />
      )}
    </ContainerAnimation>
  );
};

export default EffectCircle;
