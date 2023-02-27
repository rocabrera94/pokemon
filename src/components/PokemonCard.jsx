import React from 'react'
import '../styles/PokemonCard.css'
const PokemonCard = ({pokemon}) => {
  return (
  
    <div className='pokemon-container'>
      <p className='pokemon-name'>{pokemon.name}</p>
    </div>)
 
  

}

export default PokemonCard