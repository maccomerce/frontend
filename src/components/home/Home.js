import React from 'react';
import { navigate } from "@reach/router";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '../common/toolbar/Toolbar';

const menuCardStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.dark
  },
  button: {
    backgroundColor: "#EEEEEE",
    color: theme.palette.primary.dark,
    minWidth: 192,
    minHeight: 64
  }
}));

function MenuCard(props) {
  const classes = menuCardStyles();
  const goToPage = () => navigate(props.path)

  return (
    <Grid item>
      <Button variant="contained" size="large" className={classes.button} onClick={goToPage}>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
      </Button>
    </Grid>
  );
}

const homeStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10)
  },
}));

export default function Home() {
  const classes = homeStyles();

  return (
    <div>
      <Toolbar />
      <Grid container justify="center" className={classes.root} spacing={2}>
        <Grid item xs={6}>
          <Grid container justify="center" spacing={6}>
            <MenuCard title="Produtos" path="/products" />
            <MenuCard title="Estoque" path="/inventories" />
            <MenuCard title="Ofertas" path="/offers" />
            <MenuCard title="Vendas" path="/sells" />
            <MenuCard title="Clientes" path="/customers" />
            <MenuCard title="Usuários" path="/users" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}