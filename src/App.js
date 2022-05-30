import './App.css';
import FirstExample from './components/FirstExample';
import Square from './components/Square';
import { Container, ThemeButton } from './styles/global';

function App() {
  return (
    <div className="App">
      <Container containerPadding=".8rem" containerWidth="900px">
        <FirstExample />
        <ThemeButton buttonSize="sm">Botãozinho</ThemeButton>
        <ThemeButton buttonSize="md">Botão</ThemeButton>
        <ThemeButton buttonSize="lg">Botaozão</ThemeButton>
        <Square />
      </Container>     
    </div>
  );
}

export default App;
