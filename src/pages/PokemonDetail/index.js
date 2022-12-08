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
  const { getPokemon,pokemon } = usePokemon();
  const [moveset, setMoveset] = useState({});
  const { name } = useParams();

  useEffect(() => { getPokemon(name); }, []);

  const SearchMoveset = async (moveName) => {
    let moveset = await axios.get(`https://pokeapi.co/api/v2/move/${moveName}`)
    if (moveset?.data) setMoveset(moveset.data)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <PokemonDetailedMoves {...{ pokemon, moveset, SearchMoveset }} />
        </Grid>
        <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: "column", gap: '1rem' }}>
          <PokemonDetailed {...{ pokemon }} />
          <MovesDetailed {...{ moveset }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PokemonDetail

