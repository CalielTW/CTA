import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function ActionAreaCard({moveset,HandleDelete,detailedInfo}) {
    return (
        <Card>    
                <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {moveset?.name || '- - - -'}
                        </Typography>
                        {
                            detailedInfo ? true :
                            <Typography variant="body2" color="text.secondary">
                        Accuracy:{`${moveset?.accuracy  || '- - - -'}`}
                                <p />
                                Power:{`${moveset?.power  || '- - - -'}`}
                                <p />
                                PP:{`${moveset?.pp  || '- - - -'}`}
                                <p />
                                Prioridad:{`${moveset?.priority  || '- - - -'}`}
                                <p />
                                Tipo:{`${moveset?.type?.name  || '- - - -'}`}
                                <p />
                                Daño:{`${moveset?.damage_class?.name  || '- - - -'}`}
                                <p />
                            </Typography>}
                </CardContent>
                <CardActionArea>
                {
        detailedInfo ?  true:<Button fullWidth variant='error' onClick={()=> HandleDelete(moveset.name)}> Delete </Button>
      } 
                </CardActionArea>
        </Card>
    );
}