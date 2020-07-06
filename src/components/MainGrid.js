import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData';
import LocalData from './localData';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>
              <GlobalData/>
          </Paper>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Paper className={classes.paper}>
              <LocalData />
          </Paper>
        </Grid>
        
      </Grid>
      
    </div>
  );
}
