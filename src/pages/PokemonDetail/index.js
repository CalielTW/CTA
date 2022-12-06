import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/system';
import PokemonDetailed from './../../components/PokemonDetailed'
import MovesDetailed from './../../components/MovesDetailed'
import PokemonDetailedMoves from './../../components/PokemonDetailedMoves'
import { Grid } from '@mui/material';

const PokemonDetail = () => {
  const { name } = useParams();
  const [newPokemon, setPokemon] = useState([]);
  useEffect(() => { getPokemonName(); }, []);
  const [moveset, setMoveset] = useState({});

  const SearchMoveset = async (moveName) => {
    let moveset = await axios.get(`https://pokeapi.co/api/v2/move/${moveName}`)
    if (moveset?.data) setMoveset(moveset.data)
  }

  const getPokemonName = async () => {
    let newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (newPokemon?.data) setPokemon(newPokemon.data)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <PokemonDetailedMoves {...{ newPokemon, moveset, SearchMoveset}} />
        </Grid>

        <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: "column", gap: '1rem' }}>
          <PokemonDetailed {...{ newPokemon }} />
          <MovesDetailed {...{moveset}}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PokemonDetail

