import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ newPokemon }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Moveset</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newPokemon?.moves?.map((row) => (
          <TableRow
            key={row.move.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
            <TableCell component="th" scope="row"> {row.move.name} </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}