import React, { useState } from 'react';
import Toolbar from '../common/toolbar/Toolbar';
import Table from '../common/table/Table';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

const headers = [
  { key: 'name', value: 'Nome' }, 
  { key: 'description', value: 'Descrição' }, 
  { key: 'price', value: 'Preço' }
]

const data = [
  {
    name: 'Mouse',
    description: 'Mouse Microsoft Wireless',
    price: formatToBrl(49.90)
  },
  {
    name: 'Keyboard',
    description: 'Keyboard Microsoft Wireless',
    price: formatToBrl(99.90)
  },
  {
    name: 'Headset',
    description: 'Headset Logitech Bluetooth',
    price: formatToBrl(149.90)
  },
  {
    name: 'Mousepad',
    description: 'Mousepad 120x40 Razer',
    price: formatToBrl(19.90)
  },
];

export default function ProductsList() {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <div className={classes.root}>
      <Toolbar />
      <Grid container justify="center" className={classes.table}>
        <Card className={classes.card}>
          <Table headers={headers} body={products} />
        </Card>
      </Grid>
    </div>
  );
}