import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea } from '@mui/material';

export default function ActionAreaCard({pokemon, HandleAddPokemon}) {
    return (
      <Card sx={{backgroundColor:'#424949', maxWidth: 345 }}>  
    
      <Button fullWidth variant='error' onClick={()=> HandleAddPokemon()}> Add to Team </Button>
     

          <CardMedia
            component="img"
            height="140"
            image= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`}
            alt={`${pokemon?.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Base XP:{`${pokemon?.base_experience}`}
            <br/>
              Altura:{`${pokemon?.height}`}
            <br/>
              Peso:{`${pokemon?.weight}`}
            <br/>
            </Typography>
          </CardContent>
      </Card>
    );
 }
