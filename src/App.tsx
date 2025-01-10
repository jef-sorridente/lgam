import Header from "./components/Header";
import StyleGlobal from "./styles";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
