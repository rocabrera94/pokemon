import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'



const PokemonList = ({pokemons}) => {

  let {results} = pokemons;
  const [names, setNames] = useState([])
 /* const [isLoading, setIsLoading] = useState(false) 
  let arr =[]
  let arr1=[]
  const names =  () => {
    setIsLoading(false)
    for (const property in pokemons) {
      arr.push(property, pokemons[property])
      
    }
    let i=0;
    while (i<1278){
      arr1.push(arr[7][i].name)
      i++
    }
    setIsLoading(true)
    return arr1
    
  };

  useEffect(()=>{
    names()
  },[])
  
  return (
    <div>
       <button onClick={()=>names()}>click</button>
       <button onClick={()=>console.log(arr1)}>arr</button>
       <PokemonCard names={arr1}/>
    </div>
  )

  */
 
 useEffect(()=>{
  poke()
 },[])
 return(
  <div>
    <button onClick={()=>console.log(results[0].name)}>click!</button>
    <button onClick={()=>poke()}>poke</button>
    {results.map((pokemon)=>(
      <p key={pokemon.name}>{pokemon.name}</p>
    ))}
  </div>
 )
}

export default PokemonList