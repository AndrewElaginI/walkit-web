import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
});

function createData(userList) {
  return userList.map(user => ({
    id: user.id,
    email: user.email,
    role: user.role
  }));
}

function UserTable({ userList }) {
  const classes = useStyles();
  const rows = createData(userList);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Id</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Role</TableCell>
            {/* <TableCell align='right'>Fat&nbsp;(g)</TableCell>
            <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
            <TableCell align='right'>Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {/* <TableCell component='th' scope='row'>
                {row.name}
              </TableCell> */}
              <TableCell align='center'>{row.id}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
              <TableCell align='center'>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default UserTable;
