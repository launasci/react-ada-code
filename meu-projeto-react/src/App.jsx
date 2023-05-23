import MeuComponente from "./components/MeuComponente"
import MeuBotao from "./components/MeuBotao"
import MeuContador from "./components/MeuContador"
import MinhaLista from "./components/MinhaListas"
import EfeitoColateral from "./components/EfeitoColateral"
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
      <div>
        <h3> Olha o componente ai debaixo, renderizando umas comidas <br />
          que fala sobre listas e keys!
        </h3>
        <MinhaLista />
        <p> ---------------------------------------------</p>
        <br />
        <EfeitoColateral />
      </div>
      
    </div>

  )
}

export default App