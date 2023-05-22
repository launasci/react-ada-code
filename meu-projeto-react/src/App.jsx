import MeuComponente from "./components/MeuComponente"
import MeuBotao from "./components/MeuBotao"
function App() {

  return (
    <div>
          <h1>Olá Mundo, React!</h1>
          <MeuComponente />
          <MeuBotao conteudo='isso é uma props' />
          <MeuBotao conteudo="legal né" />
    </div>

  )
}

export default App