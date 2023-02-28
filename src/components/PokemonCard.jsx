import React from 'react'
import '../styles/PokemonCard.css'
const PokemonCard = ({pokemon}) => {
  return (
  
    <div className='pokemon-container'>
      <img src={pokemon.sprites.front_default} className='pokemon-img' />
      <p className='pokemon-name'>{pokemon.name}</p>
      <p className='pokemon-id'>{pokemon.id}</p>
      <p className='pokemon-type'>{pokemon.types[0].type.name}</p>
    </div>)
 
  

}

export default PokemonCard