import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
    const {name} = useParams();

    // 1 usar useEffect para hacer una peticion axios al endpoint de traer pokemon por el nombre
    // 2 crear state con use state para guardar el pokemon actual
     
  return (
    <div>{name}</div>
  )
}

export default PokemonDetail