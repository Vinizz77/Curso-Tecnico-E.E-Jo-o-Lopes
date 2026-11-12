import { useEffect, useState } from 'react'
import FormularioJogo from './components/FormularioJogo'
import ListaJogos from './components/ListaJogos'
import './App.css'

const generos = [
  'RPG',
  'Ação',
  'Corrida',
  'Esporte',
  'Estratégia',
  'Sandbox'
]

const jogosIniciais = [
  {
    id: 1,
    nome: 'Elden Ring',
    genero: 'RPG'
  },
  {
    id: 2,
    nome: 'Forza Horizon 5',
    genero: 'Corrida'
  }
]

function App() {
  const [jogos, setJogos] = useState(() => {
    const jogosSalvos = localStorage.getItem('jogos')

    return jogosSalvos
      ? JSON.parse(jogosSalvos)
      : jogosIniciais
  })

  useEffect(() => {
    localStorage.setItem(
      'jogos',
      JSON.stringify(jogos)
    )
  }, [jogos])

  function adicionarJogo(nome, genero) {
    const novoJogo = {
      id: Date.now(),
      nome,
      genero
    }

    setJogos((jogosAtuais) => [
      ...jogosAtuais,
      novoJogo
    ])
  }

  return (
    <main className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-7">

          <h1 className="text-center mb-4">
            🎮 Meus Jogos
          </h1>

          <FormularioJogo
            generos={generos}
            adicionarJogo={adicionarJogo}
          />

          <ListaJogos jogos={jogos} />

        </div>

      </div>

    </main>
  )
}

export default App