import { useState, useEffect } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import {useFetch} from './utils/useFetch'





function App() {
  /*
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
  
  */
  const [pokemons, setPokemons] = useState([])
  const {data, error, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/')

  let arr = []
  const waitFetch = ()=>{
    if (data){
    for (let i=0;i<20;i++){
      arr.push(data.results[i]) 
      setPokemons(arr)
      }
    }
  }
  setTimeout(waitFetch, 100)
    
  
  if (isLoading) return <p>loading</p>;
  if (error) return <p>error</p>



return (
  <div>
    <button onClick={()=>console.log(data)}>clic</button>
    
    
    
    {(pokemons.map((pokemon)=>(
      <div key={pokemon.name}> 
        <p>{pokemon.name}</p>
      </div>
    )))}
  </div>
)
 
     
}

export default App
