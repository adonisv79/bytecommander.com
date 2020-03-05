import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import FlappyGame from './FlappyGame';

export default class Flappy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Grid container align="center">
      <Grid item xs={12} sm={5} md={5} lg={4} xl={2} align="left">
        <h2>Flappy Bird</h2><br />
        Ahh.. the ever so famous Flappy Bird... here is my rendition of it promoting the beautiful Philippine islands. Here I utilize the canvas html object and created a simple gameloop to run the entire game logic.
        <br /><br />
        <i>Note: This is not a full game at the moment! I will still have to add the collision detection, scoring and fancy font styles. Recently I have modified this to pull out the core features into a whole new project which I will use for web game development.</i>
      </Grid>
      <Grid item xs={12} sm={7} md={7} lg={8} xl={10}>
        <FlappyGame />
      </Grid>
    </Grid>
  }
}