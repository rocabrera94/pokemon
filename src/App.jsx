import './App.css'
import Home from './components/Home'
import {Route, Routes} from 'react-router-dom'
import { PokemonDetail } from './components/PokemonDetail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<PokemonDetail/>} />
    </Routes>
  )
}

export default App
