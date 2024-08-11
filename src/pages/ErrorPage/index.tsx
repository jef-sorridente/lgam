import { NavLink } from "react-router-dom";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { ErrorComponent } from "./styles";

const ErrorPage = () => {
  return (
    <ErrorComponent>
      <Title>Oops!</Title>
      <Text>Parece que não encontramos essa página.</Text>
      <NavLink to={"/"}>
        <b>Voltar a página incial</b>
      </NavLink>
    </ErrorComponent>
  );
};

export default ErrorPage;
