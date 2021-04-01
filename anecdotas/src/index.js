import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const App = (props) => {
  //Estado indice seleccionado
  const [selected, setSelected] = useState(0)
  //Estado de los votos, se almacenan en un array de 6 valores que guarda
  //los votos y se relaciona con anecdotes segun su indice o estado de selected
  const [votos, setVotos] = useState([0,0,0,0,0,0])
  
  //Verificar el largo del array
  console.log(anecdotes.length)
  
  //Función anecdotaRandom(), permite obtener un número random y 
  // y asigna el resultado a selected
  const anecdotaRandom = () => {
    var random=Math.floor(Math.random()*anecdotes.length)
    console.log(random)
    setSelected(random)
  }
  //Función que permite manejar el click del boton de votar
  // Y aumenta la cantidad de votos
  const handlerClickVotos = () =>{
    //Se aplica desectructuramiento y se crea una copia de los votos
    var nuevos_votos = [...votos]
    //Se aumenta la cantidad de votos en la posicion seleccionada (selected)
    // en +1
    nuevos_votos[selected] = nuevos_votos[selected]+1
    //Se asigna el nuevo array indicando el valor en la posiicion
    //seleccionada con su nuevo valor.
    setVotos(nuevos_votos)
  }
  //Funcion de retorno que permite encontrar el mayor voto 
  //dentro del array votos y retorna el indice
  const maxVotos = () => {
		var max = -1 
    var maximo_indice = -1
		
		for(let cont in votos) {
			if (votos[cont] > max) {
				maximo_indice = cont
				max = votos[cont]
			}
		}
		return maximo_indice
	}

  return (
    <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
    <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
    <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
                Anécdota del Día
            </span>
        </h2>
        
        <div class="bg-gray-200 mt-5 dark:bg-gray-800 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
            <div class="flex items-start text-left">
                <div class="flex-shrink-0">
                    <div class="inline-block relative">
                        <a href="#" class="block relative">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" class="mx-auto object-cover rounded-full h-16 w-16 "/>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                            <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div class="ml-6">
                    <p class="flex items-baseline">
                        <span class="text-gray-600 dark:text-gray-200 font-bold">
                            A Msan
                        </span>
                        <span class="text-gray-500 dark:text-gray-300  ml-2 text-sm">
                        <p>Has: {votos[selected]} votes </p>
                        </span>
                      
                    </p>
                    <div class="mt-3">
                        <p class="mt-1 max-w-xs dark:text-white">
                          {props.anecdotes[selected]}  
                        </p>
                    </div>
                    <button type="button" class="mt-3 py-2 px-4  bg-purple-500 hover:bg-purple-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
               onClick={handlerClickVotos}>
                    Vote
                </button>
                <button type="button" class="mt-3 py-2 px-4  bg-blue-500 hover:bg-blue-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={anecdotaRandom}>
                    Next Anecdote
                </button>
                </div>
                
            </div>
        </div>
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
                Anécdota más Votada
            </span>
        </h2>
        
        <div class="bg-red-200 mt-5 dark:bg-gray-800 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
            <div class="flex items-start text-left">
                <div class="flex-shrink-0">
                    <div class="inline-block relative">
                        <a href="#" class="block relative">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" class="mx-auto object-cover rounded-full h-16 w-16 "/>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                            <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div class="ml-6">
                    <p class="flex items-baseline">
                        <span class="text-gray-600 dark:text-gray-200 font-bold">
                            A Msan
                        </span>
                        <span class="text-gray-500 dark:text-gray-300  ml-2 text-sm">
                        <p>Tiene {votos[maxVotos()]} votos </p>
                        </span>
                      
                    </p>
                    <div class="mt-3">
                        <p class="mt-1 max-w-xs dark:text-white">
                        {anecdotes[maxVotos()]}
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    
    <div class="flex items-center gap-8 p-8 lg:p-24">
        <img src="https://www.tailwind-kit.com/images/landscape/3.jpg" class="rounded-lg w-1/2" alt="Tree"/>
        <div>
            <img src="https://www.tailwind-kit.com/images/landscape/2.jpg" class="rounded-lg mb-8" alt="Tree"/>
            <img src="https://www.tailwind-kit.com/images/landscape/4.jpg" class="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)