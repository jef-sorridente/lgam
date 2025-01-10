import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import EventosInfo from "./pages/EventInfo";
import Galery from "./pages/Galery";
import Affiliates from "./pages/Affiliates";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/eventos" element={<EventosInfo />} />
    <Route path="/galeria" element={<Galery />} />
    <Route path="/filiados" element={<Affiliates />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default Rotas;
