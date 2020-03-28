import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import FlappyGame from './FlappyGame';

export default class Flappy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Grid container align="center">
      <Grid item xs={12} sm={12} md={12} lg={5} xl={5} align="left">
        <h2>Flappy Bird</h2><br />
        Ahh.. the ever so famous Flappy Bird... this is my rendition of it promoting the beautiful Philippine islands and the famous Jollibee brand. Here I utilize the canvas html object and created a simple gameloop to run the entire game logic. Just like the original game, your goal is not to get hit by the obstacles. Unlike the original however, this version provides coins that you need to maneuver towards to. Getting consecutive coins gives you combo points, reach certain thresholds and your next bonus score increases as you get the next coins. Miss 1 and the bonus resets to 0. How far can you go?
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
        <FlappyGame />
      </Grid>
      <Grid item xs={12} sm={4} md={6} lg={3} xl={3} align="left">
        <i>Note: This is not a full game at the moment! I recently added a collision detection system and some concept animation engine. These may still eveolve. Missing parts also include sounds, scoring and fancy font styles. Recently I have modified this to pull out the core features into a whole new project which I will use for web game development. This is a fan made game. Jollibee is a registered trademark of Jollibee Foods Corp. and is not in any way connected to this product.</i>
      </Grid>
    </Grid>
  }
}