import MeuComponente from "./components/MeuComponente"
import MeuBotao from "./components/MeuBotao"
import MeuContador from "./components/MeuContador"
function App() {

  return (
    <div>
          <h1>Olá Mundo, React!</h1>
          <p>Eu sou o componente APP - pai - e tudo que você esta <br />
          vendo aqui são outros componentes que foram importados :) </p>
          <p> ---------------------------------------------</p>
          <MeuComponente />
          <MeuBotao conteudo='isso é uma props' />
          <MeuContador /> 
    </div>

  )
}

export default App