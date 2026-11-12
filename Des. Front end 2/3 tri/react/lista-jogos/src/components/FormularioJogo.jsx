function FormularioJogo({generos}){
    console.log(generos);
    return (
        <div>
            <h2>Formúlario</h2>
            <p>Gêneros recebidos</p>

            {generos.map((genero)=>(
            <p>
                {genero}
            </p>
            ))}
        </div>
    )
}

export default FormularioJogo;