import Text from "../../components/Text";
import Title from "../../components/Title";
import { ErrorComponent } from "./styles";

const ErrorPage = () => {
  return (
    <ErrorComponent>
      <Title>Oops!</Title>
      <Text>Desculpe, ocorreu um erro inesperado.</Text>
    </ErrorComponent>
  );
};

export default ErrorPage;
