import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FormularioJogo from './components/FormularioJogo'
const generos= [
  'RPG',
  'Souls like',
  'Arcade',
  'Esporte',
  'FPS'
]

function App() {
  return (
    <main className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-7'>
            <h1 className='text-center mb-4'>My Games</h1>
        </div>
        <FormularioJogo/>
      </div>
    </main>

  )
}

export default App
