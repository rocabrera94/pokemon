import { useParams, useLocation } from "react-router-dom";

export function PokemonDetail() {
    const {id} = useParams()
    const location = useLocation()
    return (
        <>
            <h1>{location.state.name}</h1>
            <button onClick={()=>console.log(id)}>id</button>
            <button onClick={()=>console.log(location.state.name)}>pokemon</button>
        </>
    )
}