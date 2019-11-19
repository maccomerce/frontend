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

export default function ErrorPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12}>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.text}>
                <b>Ops!</b>
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item xs={12}>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.text}>
                {props.message}
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
}