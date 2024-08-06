import About from "./containers/About";
import ErrorPage from "./containers/ErrorPage";
import EventosInfo from "./containers/EventInfo";
import Galery from "./containers/Galery";
import Navbar from "./containers/Navbar";
import StyleGlobal, { Container } from "./styles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <StyleGlobal />
      <Navbar />

      <Container>
        <Routes>
          <Route path="" element={<About />} />
          <Route path="/eventos" element={<EventosInfo />} />
          <Route path="/galeria" element={<Galery />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
