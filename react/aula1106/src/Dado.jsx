export  function Dado({numFaces = 6}) { // valor padrão caso não seja passado o parâmetro
 
    let valor = Math.trunc(Math.random() * numFaces + 1)

    return (
        <div>
            <p>Face do dado: {valor}</p>
        </div>
    )
}