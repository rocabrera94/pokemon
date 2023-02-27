import React from 'react'
import PokemonCard from './PokemonCard'



const PokemonList = ({pokemons}) => {

 
 return(
  <div>
    { (pokemons.map((pokemon)=>(
      <div key={pokemon.name}> 
        <PokemonCard pokemon={pokemon}/>
      </div>
    ))) }
  </div>
 )
}

export default PokemonList