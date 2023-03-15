import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import usePokemon from '../hooks/usePokemon'
import Grid from '@mui/material/Grid';
import MovesDetailed from './../components/MovesDetailed'

export default function ActionAreaCard({ pokemon, HandleAddPokemon, detailedInfo }) {
  const { deleteTeamPokemon } = usePokemon();
  return (
    <Card sx={{ maxWidth: 345 }}>
      {
        detailedInfo ? <Button fullWidth variant='error' onClick={() => deleteTeamPokemon()}> Delete Pokemon </Button> : <Button fullWidth variant='error' onClick={() => HandleAddPokemon()}> Add to Team </Button>
      }
      <CardMedia
        component="img"
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`}
        alt={`${pokemon?.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
          {pokemon?.name}
        </Typography>
        {
            detailedInfo ? pokemon?.types.map((res, index)=> 

            <Typography key={index} variant="body2" color="text.secondary" style={{ textAlign: "center" }}>
              {`${res.type.name}`}
            </Typography>)
            :false
        }
        {
          detailedInfo ? pokemon?.moves.map ((moveset, index)=>
                          <Typography  key={index} variant="body2" color="text.secondary" style={{ textAlign: "center" }}>
                          <Grid fullWidth>
                          <MovesDetailed {...{ moveset, detailedInfo: true }}/>
                          </Grid>
                          </Typography> )
                            : 
                            <Typography variant="body2" color="text.secondary" >
                                 Base XP:{`${pokemon?.base_experience}`}
                                 <br />
                                 Altura:{`${pokemon?.height}`}
                                 <br />
                                 Peso:{`${pokemon?.weight}`}
                                 <br />
                                 </Typography>
        }
      </CardContent>
    </Card>
  );
}
