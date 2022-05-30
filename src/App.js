import "./App.css";
import { useState } from "react";
import FirstExample from "./components/FirstExample";
import { MagicSquare } from "./components/Square/style";
import { GlobalStyle, Container, ThemeButton } from "./style/global";

function App() {
  const [activeButton, setActiveButton] = useState("");

  //Lógicas de negócio sempre ficam no componente React (preferencialmente em App nesse momento inicial)
  function comprarProduto() {
    console.log("Comprei meu produto");
  }

  return (
    <>
      <GlobalStyle />
      <div className="App">
        {/* Quadradinho Mágico: responsividade de tamanho por meio de props responsivas */}
        <MagicSquare
          width={{ lg: "250px", md: "200px", sm: "150px" }}
          height={{ lg: "250px", md: "200px", sm: "150px" }}
        >
          
          {/* Styled components podem receber children */}
          <h1 className="titulo">Título Grande</h1>
          <p>A vida é feliz</p>
        </MagicSquare>

        { /* Container com regulável por meio de props */ }
        <Container containerWidth={400} containerPadding="sm">

          <FirstExample />
          <button onClick={() => console.log("Oi")}>Botao</button>

          {/* Botões de estilo variável */}
          <ThemeButton
            active={activeButton === "big" ? true : false}
            buttonSize="lg"
            onClick={() => setActiveButton("big")}
          >
            Botaozão
          </ThemeButton>

          <ThemeButton
            buttonSize="md"
            active={activeButton === "mid" ? true : false}
            onClick={() => setActiveButton("mid")}
          >
            Botão
          </ThemeButton>

          <ThemeButton
            buttonSize="sm"
            active={activeButton === "small" ? true : false}
            onClick={() => setActiveButton("small")}
          >
            Botazinho
          </ThemeButton>

          {/* Abas por meio de estados reativos */}
          {activeButton === "big" && <h1>Grandão</h1>}  
          {activeButton === "mid" && <h1>Mais ou menos</h1>}  
          {activeButton === "small" && <h1>Pequeno</h1>}  
        </Container>
      </div>
    </>
  );
}

export default App;
