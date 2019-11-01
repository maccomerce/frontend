import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '../common/toolbar/Toolbar';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card } from '@material-ui/core';
import { formatToBrl } from '../../util/money';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 0.96,
  },
  table: {
    paddingTop: theme.spacing(4),
  },
}));

const data = [
  {
    name: 'Mouse',
    description: 'Mouse Microsoft Wireless',
    price: 49.90
  },
  {
    name: 'Keyboard',
    description: 'Keyboard Microsoft Wireless',
    price: 99.90
  },
  {
    name: 'Headset',
    description: 'Headset Logitech Bluetooth',
    price: 149.90
  },
  {
    name: 'Mousepad',
    description: 'Mousepad 120x40 Razer',
    price: 19.90
  },
];

function ProductListItem(props) {
  return (
    <TableRow key={props.index} hover>
      <TableCell>{props.index}</TableCell>
      <TableCell>{props.product.name}</TableCell>
      <TableCell>{props.product.description}</TableCell>
      <TableCell>{formatToBrl(props.product.price)}</TableCell>
    </TableRow>
  );
}

export default function ProductsList() {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <div className={classes.root}>
      <Toolbar />
      <Grid container justify="center" className={classes.table}>
        <Card className={classes.card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: 'bold'}}>#</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Nome</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Descrição</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Preço</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => <ProductListItem key={index + 1} index={index + 1} product={product} /> )}
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </div>
  );
}