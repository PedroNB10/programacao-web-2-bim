export function Saudacoes({nome, idade}) {
    console.log(nome)
    console.log(idade)

    return (
        <div>
            <h1>Olá, {nome}!</h1>
            <h2>Você tem {idade} anos.</h2>
        </div>
    )

}