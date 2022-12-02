import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function BasicTable({pokemons}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pokemon</TableCell>
            <TableCell align="right">url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon) => (
            <TableRow
              key={pokemon.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
              <TableCell component="th" scope="row"> {pokemon.name} </TableCell>
              <TableCell align="right">{pokemon.url}</TableCell>
              <Box
               sx=
                {{
                typography: 'body1',
                '& > :not(style) + :not(style)': 
                  {
                  ml: 2,
                  },
                }}
              >
              <Link href = {`http://localhost:3000/pokemon/${pokemon.name}`} > {pokemon.name} </Link>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}