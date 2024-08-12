import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import EventosInfo from "./pages/EventInfo";
import Galery from "./pages/Galery";
import Navbar from "./containers/Navbar";
import StyleGlobal, { Container } from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ranking from "./pages/Ranking";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/eventos" element={<EventosInfo />} />
    <Route path="/galeria" element={<Galery />} />
    <Route path="/filiados" element={<Ranking />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

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
