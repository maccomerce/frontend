import React from 'react';
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

  return (
    <Grid item>
      <Button variant="contained" size="large" className={classes.button}>
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
            <MenuCard title="Produtos" />
            <MenuCard title="Estoque" />
            <MenuCard title="Ofertas" />
            <MenuCard title="Vendas" />
            <MenuCard title="Clientes" />
            <MenuCard title="Usuários" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}