import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import EventosInfo from "./pages/EventInfo";
import Galery from "./pages/Galery";
import Affiliates from "./pages/Affiliates";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/eventos" element={<EventosInfo />} />
    <Route path="/galeria" element={<Galery />} />
    <Route path="/filiados" element={<Affiliates />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default Rotas;
