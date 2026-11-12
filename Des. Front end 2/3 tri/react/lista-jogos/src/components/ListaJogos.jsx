
function ListaJogos({ jogos }) {
  return (
    <section>

      <h4 className="mb-3">
        Jogos cadastrados
      </h4>

      <div className="list-group">

        {/* 1. Percorra o array jogos utilizando map */}
        {jogos.__________((jogo) => (

          <div
            // 2. Utilize o ID do jogo como key
            key={__________}
            className="list-group-item d-flex justify-content-between align-items-center"
          >

            <div>
              <h6 className="mb-1">

                {/* 3. Apresente o nome do jogo */}
                {__________}

              </h6>

              <small className="text-body-secondary">

                Gênero: {__________}

              </small>
            </div>

            <span className="badge text-bg-primary">

              {/* 4. Apresente novamente o gênero */}
              {__________}

            </span>

          </div>

        ))}

      </div>

    </section>
  )
}

export default ListaJogos