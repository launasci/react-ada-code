import { useState, useEffect } from "react"

const minhaLista = [
  { id: '1', value: 'arroz' },
  { id: '2', value: 'carne' },
  { id: '3', value: 'café' }
]
export default function MinhaLista() {
  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  // recebe como primeiro parametro uma função
  // o segundo parametro é o que informa quando o useEffect deve ser executado
  useEffect(
    () => {
      if(pesquisa){
        const novaLista = minhaLista.filter((item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(novaLista)
      } 
      else {
        setProdutos(minhaLista)
      }
    }, [pesquisa]
  )

  return(
    <div>
      <h3>Eu sou um componente que mostra o que são efeitos colaterais</h3>
      <p> Aqui estamos usando o useState - que manipula (?) o estado de um componente</p>
      <p> E estamos usando também o useEffect</p>
      <input 
        placeholder="pesquise aqui" 
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      {produtos.map((item)=>{
        return(
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}