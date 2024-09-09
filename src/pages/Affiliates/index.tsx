import Text from "../../components/Text";
import Title from "../../components/Title";
import ItemAf from "../../components/ItemAf";

import { Container } from "./styles";
import EffectLines from "../../components/Effects/EffectLines";

const Affiliates = () => {
  return (
    <Container className="container">
      <EffectLines />
      <div>
        <Title>Filiados</Title>
        <Text>Filiados da Liga</Text>
      </div>
      <div>
        <ItemAf />
      </div>
    </Container>
  );
};

export default Affiliates;
