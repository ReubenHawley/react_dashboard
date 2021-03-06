import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


// Generate Order Data
function createData(id, date, coin, type, direction, amount) {
  return { id, date, coin, type, direction, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'BTC/USDT', 'Market', 'LONG', 312.44),
  createData(1, '16 Mar, 2019', 'SXP/BTC', 'LIMIT', 'SHORT', 866.99),
  createData(2, '16 Mar, 2019', '1INCH/BTC', 'LIMIT', 'LONG', 100.81),
  createData(3, '16 Mar, 2019', 'BTC/BUSD', 'MARKET', 'SHORT', 654.39),
  createData(4, '15 Mar, 2019', 'BNB/BUSD', 'LIMIT', 'LONG', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ffffff",
    backgroundColor:'#373535',
  },
  cell: {
    color: "#ffffff",
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment >
      <Table size="small" className={classes.root}>
        <TableHead>
          <TableRow className={classes.cell}>
            <TableCell>Date</TableCell>
            <TableCell>Coin</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Direction</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.coin}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.direction}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}