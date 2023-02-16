import React from 'react'

const PokemonCard = ({names}) => {
  return (
  
    <div>
      <button onClick={()=>console.log(names)}>clickme</button>
        <div>
          {names.map((name)=>(
           <p key={name}>{name}</p> 
          ))}
        </div>
    </div>)
 
  

}

export default PokemonCard