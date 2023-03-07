import React from 'react'
import '../styles/PokemonCard.css'
import { Link } from 'react-router-dom'
const PokemonCard = ({pokemon}) => {
  return (
  
    <div className='pokemon-container'>
      <img src={pokemon.sprites.front_default} className='pokemon-img' />
      <p className='pokemon-name'>{pokemon.name}</p>
      <p className='pokemon-id'>id: {pokemon.id}</p>
      <p className='pokemon-type'>type: {pokemon.types[0].type.name}</p>
      <Link to={`/:${pokemon.id}`} state={pokemon}>
        <button className='see-more' >see more</button>
      </Link> 
    </div>
    )
 
  

}

export default PokemonCard