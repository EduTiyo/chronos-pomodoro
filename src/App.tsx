import Container from "./components/Container";
import Heading from "./components/Heading";
import Logo from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";

const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
};

export default App;
