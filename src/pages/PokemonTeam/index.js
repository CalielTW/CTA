import React, {useEffect, useState} from 'react'
import PokemonDetailed from './../../components/PokemonDetailed'
import MovesDetailed from './../../components/MovesDetailed'
import { Container } from '@mui/system';
import usePokemon from '../../hooks/usePokemon'
import Grid from '@mui/material/Grid';

const Index = () => {
    const {team} = usePokemon();
    

    return (
        <Container>
          <Grid container spacing={3}>
         {team.map((pokemon, index)=>
         <Grid item xs={4}>
         <PokemonDetailed key={index} {...{pokemon,detailedInfo:true}} />
         <Grid container spacing={3}>
         {team.map((moveset, index)=>
         <Grid item xs={6}>
         <MovesDetailed key={index} {...{moveset,detailedInfo:true}} />
         </Grid>
         )}
         </Grid>
         </Grid>
         )}
         </Grid>
        </Container>
      );
    }
    export default Index


