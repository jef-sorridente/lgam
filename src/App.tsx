import Navbar from "./components/Navbar";
import StyleGlobal from "./styles";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <Navbar />

      <Rotas />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
