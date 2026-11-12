
import { useState } from 'react'

function FormularioJogo({ generos, adicionarJogo }) {

  // 1. Crie um estado para armazenar o nome do jogo
  const [nome, __________] = useState('')

  // 2. Crie um estado para armazenar o gênero
  const [genero, __________] = useState('')

  // 3. Crie a função responsável por enviar o formulário
  function handleSubmit(__________) {

    // Impede o recarregamento da página
    evento.__________()

    // 4. Verifique se o nome e o gênero foram preenchidos
    if (____________________________) {
      return
    }

    // 5. Chame a função recebida por props
    __________(nome.trim(), genero)

    // 6. Limpe os campos após o cadastro
    __________('')
    __________('')
  }

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">

        <h5 className="card-title mb-4">
          Cadastrar jogo
        </h5>

        <form onSubmit={__________}>

          <div className="mb-3">
            <label className="form-label">
              Nome do jogo
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Digite o nome do jogo"

              // 7. Defina o valor do campo
              value={__________}

              // 8. Atualize o estado quando o usuário digitar
              onChange={(evento) => __________(evento.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Gênero
            </label>

            <select
              className="form-select"

              // 9. Defina o valor selecionado
              value={__________}

              // 10. Atualize o estado quando selecionar
              onChange={(evento) => __________(evento.target.value)}
            >
              <option value="">
                Selecione o gênero
              </option>

              {/* 11. Percorra o array de gêneros utilizando map */}
              {generos.__________((genero) => (
                <option key={__________} value={__________}>
                  {__________}
                </option>
              ))}

            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            <i className="bi bi-plus-circle"></i>{' '}
            Adicionar jogo
          </button>

        </form>

      </div>
    </div>
  )
}

export default FormularioJogo