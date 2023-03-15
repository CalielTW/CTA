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
            <TableCell  align='center'>Pokemon</TableCell>
            <TableCell  align="center">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon,index) => (
            <TableRow 
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
              <TableCell  align='center' component="th" scope="row"> {pokemon.name} </TableCell>
              <Box align='center' component="th" scope="row" >
              <Link to= {`/pokemon/${pokemon.name}`} > {pokemon.url} </Link>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
