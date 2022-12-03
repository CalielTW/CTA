import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

export default function BasicTable({ newPokemon }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{backgroundColor:'#424949'}}>Moveset</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newPokemon?.moves?.map((row) => (
          <TableRow
            key={row.move.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
            <TableCell align="center" sx={{backgroundColor:'#7F8C8D'}} component="th" scope="row"> {row.move.name} </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}