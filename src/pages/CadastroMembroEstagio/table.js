import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  {
    id: 'cpf', 
    label: 'CPF', 
    minWidth: 170 },
  { 
    id: 'nome', 
    label: 'Nome', 
    minWidth: 170 },
  {
    id: 'categoria',
    label: 'Categoria',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'carga',
    label: 'Carga\u00a0H.',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'alterar',
    label: 'Alterar',
    minWidth: 170,
    align: 'right',
  },
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(cpf, nome, categoria, carga, alterar) {
  return { cpf, nome, categoria, carga, alterar};
}

const rows = [
  createData('999-999-999-99', 'Juliana Castro de Oliveira', 'Docente', '120H'),
  createData('000-000-000-00', 'Matheus Felipe de Souza Bastos', 'Discente', '120H'),
  createData('555-555-555-55', 'Fernanda Mikaela Salvattore dos Santos', 'Externo', '120H'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 225,
  },
});

export default function MembersTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="Members Table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice().map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}