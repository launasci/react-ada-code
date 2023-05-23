const minhaLista = [
  { id: '1', value: 'arroz' },
  { id: '2', value: 'carne' },
  { id: '3', value: 'café' }
]
export default function MinhaLista (){
  return minhaLista.map((item) =>{
    return(
      <div key={item.id}>
        <h4>{item.value}</h4>
      </div>
    )
  })
}