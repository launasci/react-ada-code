export default function MeuComponenteCondicional({ contador }) {
  if (contador <= 5) {
    return (
      <div>
        <h3>O contador ainda está abaixo de 5! Clique de novo!</h3>
      </div>
    );
  } else {
    return <h3>Olha que legal, eu sou um componente de renderização condicional <br />
                e como o nome diz eu renderizo a depender de uma condição, nesse caso que contador seja maior que 5! <br />
                Além disso eu trabalho com props também, afinal só assim pra eu saber o valor que o contator está <br />
                já que contador é um dado do componente pai e não meu.
            </h3>; // Renderiza nada se contador não for igual a 5
  }
}