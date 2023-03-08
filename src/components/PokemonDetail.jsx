import { useParams, useLocation } from "react-router-dom";
import '../styles/PokemonDetail.css'

export function PokemonDetail() {
    const {id} = useParams()
    const location = useLocation()
    return (
        <>
            <div className="container">
                <p className="name">{location.state.name}</p>
                <img src={location.state.sprites.other.dream_world.front_default} alt='pokemon image' className="image" />
                <div className="data">
                    <p>{location.state.id}</p>
                    <p>{location.state.types[0].type.name}</p>
                </div>
            </div>
            <h1>{location.state.name}</h1>
            <button onClick={()=>console.log(id)}>id</button>
            <button onClick={()=>console.log(location.state)}>pokemon</button>
        </>
    )
}