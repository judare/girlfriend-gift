import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { levels, code } from "./data/game.json"

function App() {

  let tipStorage = window.localStorage.getItem("tip") || "2"
  const [level, setLevel] = useState(-1)
  const [tip, setTip] = useState(+tipStorage)
  const [showingTip, setShowingTip] = useState(false)

  const startGame = function() {
    setLevel(0);
    setShowingTip(false);
  }

  const back = function () {
    setLevel(level -1);
    setShowingTip(false);
  }

  const next = function () {
    setLevel(level +1);
    setShowingTip(false);
  }

  const useTip = function () {
    window.localStorage.setItem("tip", tip -1)
    setTip(tip -1);
    setShowingTip(true);
  }

  const testCode = function () {
    let inp = document.getElementById("input").value;
    if (code == inp) {
      alert("Ganó, tu regalo está en la maleta encima de mi armario")
    } else {
      alert("Perdió")
    }
  }

  return (
    <>
      <div className='bg-cover bg-no-repeat bg-center bg-couple'>

        <div className='w-full h-full bg-black bg-opacity-80 min-h-screen flex justify-center items-center'>
          
        
        {level == -1 ? (
          <div className='text-center'>
            <h2 className='text-white text-4xl font-bold mb-5'>Descubramos tus regalos</h2>
            <button className='rounded-xl text-yellow-900 bg-yellow-500 px-10 py-3 md:py-5 text-2xl md:text-3xl font-bold border-b-8  border-yellow-900 hover:border-b' onClick={startGame}>
              Comenzar Juego
            </button>
          </div>
        ) : null}

        {levels[level] ? (


          <div className='text-center md:px-0 px-3'>

            <div className='absolute top-10 right-10 text-white text-lg font-bold'>
              Pistas: {tip}
            </div>

            <div className='text-2xl md:text-4xl font-bold rounded-full border-2 boder-white text-white size-16 md:size-28  flex items-center justify-center mx-auto mb-5'>{level + 1}</div>
            <h2 className='lg:w-1/2 mx-auto text-white text-2xl md:text-4xl font-bold mb-5'>{levels[level].title}</h2>

            {tip > 0 && !showingTip ? (
              <div className='mb-10'>
                <button onClick={useTip} className='text-center border-b-2 border-white text-white py-3'>Usar una de mis pistas</button>
              </div>
            ) : null}

            {showingTip ? (
              <div className='mb-10 bg-white rounded-lg text-lg p-3 md:p-5'>
               {levels[level].tip}
              </div>
            ) : null}



            <div className='flex gap-5 items-center justify-center'>

              <button className='rounded-xl text-gray-900 bg-gray-500 px-6 py-3 text-xl font-bold border-b-4  border-gray-900 hover:border-b' onClick={back}>
                Atrás
              </button>

              <button className='rounded-xl text-yellow-900 bg-yellow-500 px-6 py-3 text-xl font-bold border-b-4  border-yellow-900 hover:border-b' onClick={next}>
                Siguiente
              </button>

            </div>
           
          </div>
        ) : null}


        {level > 0 && !levels[level] ? (
          <div className='text-center md:px-0 px-3'>
            <h2 className='text-white text-2xl md:text-4xl font-bold mb-5 text-center'>Hora de intentar</h2>

            <div className='mb-10'><input type="text" className='p-3 md:p-5 rounded-lg text-2xl md:text-5xl text-center' placeholder='Código' id="input" /></div>

            <button className='rounded-xl text-yellow-900 bg-yellow-500 px-10 py-3 md:py-5 text-xl md:text-3xl font-bold border-b-8  border-yellow-900 hover:border-b' onClick={testCode}>
              Probar código
            </button>
          </div>
        ) : null}


        </div>
      </div>
    </>
  )
}

export default App
