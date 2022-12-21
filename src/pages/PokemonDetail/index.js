import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@mui/system';
import PokemonDetailed from './../../components/PokemonDetailed'
import MovesDetailed from './../../components/MovesDetailed'
import PokemonDetailedMoves from './../../components/PokemonDetailedMoves'
import { Grid } from '@mui/material';
import usePokemon from '../../hooks/usePokemon'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const { getTeam,getPokemon,pokemon } = usePokemon();
  const { name } = useParams();
  const [arregloMovesets,setArregloMovesets] = useState([])
 
useEffect(() => { getPokemon(name); }, []);

  const SearchMoveset = async (moveName) => {
    let pokemonExist = arregloMovesets.find (poke=>poke.name === moveName)
    if (pokemonExist || arregloMovesets.length >3)return;
    let moveset = await axios.get(`https://pokeapi.co/api/v2/move/${moveName}`)
    setArregloMovesets([...arregloMovesets,moveset?.data])
  }
 
const HandleAddPokemon = () => {
 getTeam({...pokemon,moves:arregloMovesets});
}


  const HandleDelete = (moveName)=>{
    let newMovesetArr = arregloMovesets.filter(move=>move?.name !==moveName)
    setArregloMovesets(newMovesetArr)
  }

useEffect(() => {console.log(arregloMovesets)}, [arregloMovesets])

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <PokemonDetailedMoves {...{ pokemon, SearchMoveset }} />
        </Grid>
        <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: "column", gap: '1rem' }}>
          <PokemonDetailed {...{ pokemon,HandleAddPokemon }} />
          {arregloMovesets.map((moveset, index)=><MovesDetailed key={index} {...{moveset,HandleDelete}} />)}
        </Grid>
      </Grid> 
    </Container>
  );
}

export default PokemonDetail

//Agregar boton para agregar pokemon a un arragment de equipo

//usar pokemonState para agregar un state llamado equipo

//Crear funcion en pokemonState, agregarPokemon 4 movimientos y pokemon, maximo 6 pokemon por entrenadore

//Solo posible agregar si tiene al menos 1 movimiento