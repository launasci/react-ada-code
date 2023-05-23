import { useState } from "react"
import MeuComponenteCondicional from "./MeuComponenteCondicional"
export default function MeuContador(){

  // useState retorna um array com duas posições
  // a primeira é a variavel de estado no nosso caso contador
  // a segunda é uma segunda função no nosso caso setContador

  const [contador, setContador] = useState(0)

  function incrementar(){
    setContador(contador+1)
  }
  return(
    <div>
      <h1>Estados e Eventos</h1>
      <h2>Meu contador</h2>
      <h3> Eu sou o resultado de um gerenciamento de estado usando useState: {contador} </h3>
      <button onClick={incrementar}>Incrementar</button>
      <MeuComponenteCondicional contador={contador} />
    </div>
  )
}