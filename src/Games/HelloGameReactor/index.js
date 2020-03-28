import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import HelloGameReactor from './HelloGameReactor'

export default class Hello extends Component {
  render () {
    return (
      <Grid container align="center">
        <Grid item xs={12} sm={5} md={5} lg={4} xl={2} align="left">
          <h2>Hello Game Reactor Sample</h2>
          This is to teach people how to utilize our GameReactor SDK
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={8} xl={10} align="left">
          <HelloGameReactor />
        </Grid>
      </Grid>
    );
  }
}