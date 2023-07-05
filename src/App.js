import { Button,Buttons,Container, SideLeft, SideRight, Subtitle, Title } from "./style.sc";
import Planet from './assets/planet.gif';
import Number from './assets/4.svg';

function App() {
  return (
   <Container >
    <SideLeft>
      <Title>Ops, esta página não foi encontrada</Title>
      <Subtitle>Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</Subtitle>
      <Buttons>
        <Button >
          Voltar
        </Button>
        <Button >
          Ir para Home
        </Button>
      </Buttons>
    </SideLeft>
    <SideRight>
      <img src={Number} alt="" />
      <img src={Planet} alt="gif" />
      <img src={Number} alt="" />
    </SideRight>
   </Container>
  );
}

export default App;
