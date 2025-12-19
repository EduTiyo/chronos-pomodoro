import Container from "./components/Container";
import Heading from "./components/Heading";
import Logo from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
};

export default App;
