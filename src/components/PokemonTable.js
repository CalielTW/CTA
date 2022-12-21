import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"

export default function BasicTable({pokemons}) {
  return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  sx={{backgroundColor:'#424949'}} align='center'>Pokemon</TableCell>
            <TableCell sx={{backgroundColor:'#4D5656'}} align="center">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon,index) => (
            <TableRow 
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
              <TableCell sx={{backgroundColor:'#7F8C8D'}} align='center' component="th" scope="row"> {pokemon.name} </TableCell>
              <Box align='center' component="th" scope="row" sx={{backgroundColor:'#95A5A6'}}>
              <Link to= {`/pokemon/${pokemon.name}`} > {pokemon.url} </Link>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
