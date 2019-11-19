import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: theme.spacing(2),
  }
}));

export default function Progress(props) {
  const classes = useStyles();
  const { loading, children } = props;

  return (
    <Fragment>
      {
        loading ?
        <Fade in={true} style={{ display: loading ? "inline-block" : "none" }}>
          <CircularProgress className={classes.progress} color="secondary" />
        </Fade>
        : children
      }
    </Fragment>
  );
}