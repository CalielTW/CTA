import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function BasicTable({ pokemon , SearchMoveset }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >Moveset</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon?.moves?.map((row) => (
          <TableRow
            key={row.move.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
            <TableCell align="center"  component="th" scope="row"> {row.move.name} </TableCell>
            <Box align='center' component="th" scope="row" >
            <Button onClick={() => SearchMoveset(row.move.name)} variant='outlined' > {row.move.name} </Button>
            </Box>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}