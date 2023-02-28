import React from 'react'
import PokemonCard from './PokemonCard'
import '../styles/PokemonList.css'


const PokemonList = ({pokemons}) => {

 return(
  <div className='list-container'>
    <h1>POKEMONS</h1>
    { pokemons.map((pokemon)=>(
      <div key={pokemon.name}> 
        <PokemonCard pokemon={pokemon}/>
      </div>
    )) }
  </div>
 )
}

export default PokemonList