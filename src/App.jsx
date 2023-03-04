import './App.css'
import { useState, useEffect } from 'react'
import PokemonList from './components/PokemonList'
import pokemonLogo from './assets/logo.png'

export default function App() {
  const [data, setData] = useState([]);
  const getPokemon = () => {
    let arr = [];
    for (let i = 1; i < 21; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => res.json())
        .then((data) => {
          arr.push(data);
          setData(arr);
        });
    }
  };

  /*const fetchPokemons = async () => {
    let arr = [];
    for (let i = 1; i < 21; i++) {
      let a = [getPokemon(i)];
      setData([...a]);
    }
  };*/

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div className="App">
      <img src={pokemonLogo} alt='pokemon' className='pokemon-logo'></img>
      <PokemonList pokemons={data} />
      
    </div>
  );
}
