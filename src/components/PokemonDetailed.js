import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({pokemon}) {
    return (
      <Card sx={{backgroundColor:'#424949', maxWidth: 345 }}>
        <CardActionArea>
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
            <p/>
              Altura:{`${pokemon?.height}`}
            <p/>
              Peso:{`${pokemon?.weight}`}
            <p/>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
 }
