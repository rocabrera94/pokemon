import React from 'react'
import PokemonCard from './PokemonCard'
import '../styles/PokemonList.css'


const PokemonList = ({pokemons}) => {

 return(
  <div className='list-container'>
    { pokemons.map((pokemon)=>(
      <div key={pokemon.name}> 
        <PokemonCard pokemon={pokemon}/>
      </div>
    )) }
  </div>
 )
}

export default PokemonList