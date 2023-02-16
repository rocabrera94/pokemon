import { useState, useEffect } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [poke, setPoke] = useState([])
  const fetchPokemonList = () =>{
    setLoading(false)
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response)=>response.json())
    .then((data)=>{
      setPokemons(data)
      })

      
      
}
let arr = []
const waitFetch = ()=>{
  if (pokemons){
  for (let i=0;i<20;i++){
   // console.log('aca pokemons es', pokemons)
    arr.push(pokemons.results[i])
    setPoke(arr)
    
}
  }}
  useEffect(()=>{
  fetchPokemonList()
  
  },[])

  setTimeout(waitFetch, 1500)
  
  
  
  




return (
  <div>
    <button onClick={()=>console.log(poke)}>clic</button>
    <button onClick={()=>console.log('puto')}>puto</button>
    <button onClick={()=>console.log(pokemons.count)}>lalal</button>
    
    {(poke.map((pokemon)=>(
      <div key={pokemon.name}> 
        <p>{pokemon.name}</p>
      </div>
    )))}
  </div>
)
 
  
}

export default App
