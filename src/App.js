import React from 'react';
// import logo from './logo.svg';

import './App.css'; 
import { Grid } from '@material-ui/core';

import usesStyles from './styles';
import { mergeClasses } from '@material-ui/styles';
import Details from './components/Details/Details';
import Main from  './components/Main/Main';



function App() {
  const classes = usesStyles();
  return (
    <div>
    <Grid className={classes.grid} container spacing={0} alignItem="center" justify='center' style={{height: '100vh'}}>
      <Grid item xs={12} sm={4}>
        <Details title="Income"/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Details title="Expense" />
      </Grid>
      
    </Grid>
    </div>
  );
}

export default App;
