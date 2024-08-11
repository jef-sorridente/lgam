import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import EventosInfo from "./pages/EventInfo";
import Galery from "./pages/Galery";
import Navbar from "./containers/Navbar";
import StyleGlobal, { Container } from "./styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ranking from "./pages/Ranking";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Container>
          <About />
        </Container>
      </>
    ),
  },
  {
    path: "/eventos",
    element: (
      <>
        <Navbar />
        <Container>
          <EventosInfo />
        </Container>
      </>
    ),
  },
  {
    path: "/galeria",
    element: (
      <>
        <Navbar />
        <Container>
          <Galery />
        </Container>
      </>
    ),
  },
  {
    path: "/filiados",
    element: (
      <>
        <Navbar />
        <Container>
          <Ranking />
        </Container>
      </>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <StyleGlobal />
      <RouterProvider router={rotas} />
    </>
  );
}

export default App;
