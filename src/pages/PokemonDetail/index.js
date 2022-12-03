import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/system';
import PokemonDetailed from './../../components/PokemonDetailed'
import PokemonDetailedMoves from './../../components/PokemonDetailedMoves'
import { Grid } from '@mui/material';

const PokemonDetail = () => {
  const { name } = useParams();
  const [newPokemon, setPokemon] = useState([]);
  useEffect(() => { getPokemonName(); }, []);

  useEffect(() => {
    console.log(newPokemon)
  }, [newPokemon])


  const getPokemonName = async () => {
    let newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (newPokemon?.data) setPokemon(newPokemon.data)
  }
  return (
    <Container>
      <Grid sx={{backgroundColor:'blue'}} container spacing={2}>
        <Grid item xs={12} sm={9}>
          <PokemonDetailedMoves {...{ newPokemon }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <PokemonDetailed {...{ newPokemon }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PokemonDetail

