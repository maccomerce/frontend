import React from 'react';
import Toolbar from '../common/toolbar/Toolbar';
import Table from '../common/table/Table';
import Progress from '../common/progress/Progress';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ErrorPage from '../common/error/ErrorPage';
import Button from '@material-ui/core/Button';
import useListProducts from '../../hooks/listProducts';

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
];

function LoadProductsError(props) {
  const classes = (makeStyles(theme => ({
    button: {
      marginTop: theme.spacing(2),
    },
  })))();

  return (
    <div align='center'>
      <ErrorPage message='Desculpe. Não conseguimos carregar os produtos. :(' />
      <Button onClick={() => props.onRefresh()} className={classes.button}>
        Atualizar
      </Button>
    </div>
  );
}

export default function ProductsList() {
  const classes = useStyles();
  const [products, isLoading, isError, fetchProducts] = useListProducts();

  return (
    <div className={classes.root}>
      <Toolbar title='Produtos' />
      <Grid container justify="center" className={classes.table}>
        <Progress loading={isLoading}>
          {isError 
            ? <LoadProductsError onRefresh={fetchProducts} />
            : (
              <Card className={classes.card}>
                <Table headers={headers} body={products} />
              </Card>
            )
          }
        </Progress>
      </Grid>
    </div>
  );
}