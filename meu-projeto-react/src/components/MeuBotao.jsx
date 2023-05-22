const MeuBotao = (props) => {
  return(
    <div>
      <h2>Eu sou apenas um componente com botões</h2>
      <p>Mas é nesse componente que tivemos o primeiro contato com <br />
      props no react</p>
      <button>{props.conteudo}</button>
      <p> ---------------------------------------------</p>
      <br />
    </div>
    
    

  )
}

export default MeuBotao