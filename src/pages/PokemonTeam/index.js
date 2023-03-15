import React, { useEffect, useState } from 'react'
import PokemonDetailed from './../../components/PokemonDetailed'
import MovesDetailed from './../../components/MovesDetailed'
import { Container } from '@mui/system';
import usePokemon from '../../hooks/usePokemon'
import Grid from '@mui/material/Grid';

const Index = () => {
  const { team } = usePokemon();

  return (
    <Container >
      <Grid container spacing={3}>
        {team.map((pokemon, index) =>
          <Grid key={index} item xs={4}>
            <PokemonDetailed {...{ pokemon, detailedInfo: true }} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
export default Index
