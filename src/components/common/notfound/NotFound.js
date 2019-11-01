import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(8)
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12}>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography variant="h2" className={classes.text}>
                <b>Ops!</b>
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item xs={12}>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.text}>
                Desculpe. Esta página não existe. :(
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
}