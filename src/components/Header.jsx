import React from 'react'
import pokemonHeader from '../assets/portada-1.jpg'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header-container'> 
      <img src={pokemonHeader} className='header-img'/>
    </div>
  )
}

export default Header