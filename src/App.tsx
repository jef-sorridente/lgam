import Navbar from "./components/Navbar";
import StyleGlobal, { Container } from "./styles";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <Navbar />
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  );
}

export default App;
