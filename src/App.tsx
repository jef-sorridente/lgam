import About from "./containers/About";
import Navbar from "./containers/Navbar";
import StyleGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <StyleGlobal />
      <Navbar />
      <Container>
        <About />
      </Container>
    </>
  );
}

export default App;
