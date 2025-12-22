import MainTemplate from "../../templates/MainTemplate";
import CountDown from "../../components/CountDown";
import Container from "../../components/Container";
import MainForm from "../../components/MainForm";

const Home = () => {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};

export default Home;
