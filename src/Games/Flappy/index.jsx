import React, {Component} from 'react';
import {Container, Grid, Hidden} from '@material-ui/core';
import './index.css';
const GAME_FPS = 30;
const BIRD_START_YPOS = 150;
const birdImg = "https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/bluebird-midflap.png";
let self;
export default class Flappy extends Component {
  constructor(props) {
    super(props);
    self = this;
    self.state = {
      isPlaying: false,
      updateLapse: 0,
      moreFunLogo: null,
      bird: {
        yPos: 150,
        yVelocity: 0,
        sprite: null, // add on component mount
        draw: (lapse) => {
          const me = self.state.bird;
          self.canvasContext.drawImage(me.sprite, 50, me.yPos);
        },
        update: (lapse) => {
          const me = self.state.bird;
          me.yVelocity += ((lapse / 1000) * 75);
          me.yPos += me.yVelocity;
          if (me.yPos >= 230) { // drowned
            self.state.isPlaying = false;
            me.yVelocity = 0;
          }
        },
      },
      ship: {
        xPos: -150,
        xVelocity: 300,
        sprite: null, // add on component mount
        draw: (lapse) => {
          const me = self.state.ship;
          self.canvasContext.drawImage(me.sprite, me.xPos, 180);
        },
        update: (lapse) => {
          const me = self.state.ship;
          me.xPos -= ((lapse / 1000) * me.xVelocity);
          if (me.xPos < -150) {
            me.xPos = 550;
          }
        },
      },
      glider: {
        xPos: -100,
        xVelocity: 400,
        yPos: 0,
        sprite: null, // add on component mount
        draw: (lapse) => {
          const me = self.state.glider;
          self.canvasContext.drawImage(me.sprite, me.xPos, me.yPos);
        },
        update: (lapse) => {
          const me = self.state.glider;
          me.xPos -= ((lapse / 1000) * me.xVelocity);
          if (me.xPos < -150) {
            me.xPos = 500 + Math.floor(Math.random() * 4) * 25;
            me.yPos = Math.floor(Math.random() * 3) * 50;
          }
        },
      },
      background: {
        base: {
          sprite: null, // add on component mount
          draw: (lapse) => {
            const me = self.state.background;
            self.canvasContext.drawImage(me.sprite, 0, 0);
          },
        },
        mountain: {
          xPos: 0,
          xVelocity: 150,
          sprite: null, // add on component mount
          draw: (lapse) => {
            const me = self.state.background.mountain;
            self.canvasContext.drawImage(me.sprite, me.xPos, 200);
          },
          update: (lapse) => {
            const me = self.state.background.mountain;
            me.xPos -= ((lapse / 1000) * me.xVelocity);
            if (me.xPos < -100) {
              me.xPos = 350;
            }
          },
        },
        road: {
          xPos: 0,
          xVelocity: 200,
          sprite: null, // add on component mount
          draw: (lapse) => {
            const me = self.state.background.road;
            self.canvasContext.drawImage(me.sprite, me.xPos, 220);
            self.canvasContext.drawImage(me.sprite, me.xPos + 120, 220);
            self.canvasContext.drawImage(me.sprite, me.xPos + 240, 220);
            self.canvasContext.drawImage(me.sprite, me.xPos + 360, 220);
          },
          update: (lapse) => {
            const me = self.state.background.road;
            me.xPos -= ((lapse / 1000) * me.xVelocity);
            if (me.xPos < -120) {
              me.xPos = 0;
            }
          },
        },
        cloud1: {
          xPos: 0,
          xVelocity: 100,
          sprite: null, // add on component mount
          draw: (lapse) => {
            const me = self.state.background.cloud1;
            self.canvasContext.drawImage(me.sprite, me.xPos, 100);
            self.canvasContext.drawImage(me.sprite, me.xPos + 250, 100);
          },
          update: (lapse) => {
            const me = self.state.background.cloud1;
            me.xPos -= ((lapse / 1000) * me.xVelocity);
            if (me.xPos < -100) {
              me.xPos += 250;
            }
          },
        },
      },
    };
  }

  componentDidMount() {
    self.canvasElement = self.refs.canvas
    self.canvasContext = self.canvasElement.getContext("2d");
    self.state.background.sprite = self.refs.background;
    self.state.bird.sprite = self.refs.bird;
    self.state.ship.sprite = self.refs.ship_medium;
    self.state.glider.sprite = self.refs.glider;
    self.state.background.base.sprite = self.refs.background;
    self.state.background.mountain.sprite = self.refs.mountain;
    self.state.background.road.sprite = self.refs.road;
    self.state.background.cloud1.sprite = self.refs.cloud1;
    self.state.moreFunLogo = self.refs.morefun;
    self.state.gameLoopInterval = null;
    self.startGameLoop();
  }

  componentWillUnmount() {
    if (self.state.gameLoopInterval) { // kill old interval
      clearInterval(self.state.gameLoopInterval);
    }
  }

  // My style of a basic game loop :p
  startGameLoop() {
    let frameNumber = 1;
    let nextFrame = (1000 / GAME_FPS) * frameNumber;
    let secondCounter = 0;
    let prev = new Date().getTime();
    let current = prev;
    let lapse = 0;
    if (self.state.gameLoopInterval) { // kill old interval
      clearInterval(self.state.gameLoopInterval);
    }
    self.state.gameLoopInterval = setInterval(() => {
      current = new Date().getTime();
      lapse = current - prev;
      secondCounter += lapse;
      if (secondCounter > nextFrame) {
        self.gameUpdate(lapse);
        self.gameDraw(lapse, { frameNumber });
        frameNumber += 1;
        nextFrame = (1000 / GAME_FPS) * frameNumber;
      }
      if (secondCounter > 1000) { // reset counters on 1 second mark
        secondCounter -= 1000;
        frameNumber = 1;
        nextFrame = (1000 / GAME_FPS) * frameNumber;
      }
      prev = current;
    }, 10);
  }

  startNewGame() {
    self.state.bird.yPos = BIRD_START_YPOS;
    self.state.bird.yVelocity = -8;
    self.state.ship.xPos = -140;
    self.state.glider.xPos = -100;
    self.state.isPlaying = true;
  }

  onTouchScreen() {
    if (self.state.isPlaying) {
      if (self.state.bird.yPos > 5) {
        self.state.bird.yVelocity = -9;
      }
    } else {
      self.startNewGame();
    }
  }

  gameUpdate(lapse) {
    if (self.state.isPlaying) {
      self.state.background.cloud1.update(lapse);
      self.state.background.mountain.update(lapse);
      self.state.background.road.update(lapse);
      self.state.bird.update(lapse);
      self.state.ship.update(lapse);
      self.state.glider.update(lapse);
    }
  }

  gameDraw(lapse, sysPerf) {
    this.canvasContext.clearRect(0, 0, self.canvasElement.width, self.canvasElement.height);
    self.state.background.base.draw(lapse);
    self.state.background.cloud1.draw(lapse);
    self.state.background.mountain.draw(lapse);
    self.state.background.road.draw(lapse);
    self.state.bird.draw(lapse);
    self.state.ship.draw(lapse);
    self.state.glider.draw(lapse);
    self.canvasContext.drawImage(self.state.moreFunLogo, 250, 190);
    self.canvasContext.font = '10px Arial';
    self.canvasContext.fillText(`Frame: ${sysPerf.frameNumber}/${GAME_FPS}`, 260, 20);

    if (!this.state.isPlaying) {
      self.canvasContext.font = '30px Arial';
      self.canvasContext.fillText("Touch screen", 10, 30);
      self.canvasContext.fillText("to start...", 10, 60);
    }
  }

  render() {
    return <Grid container align="center">
      <Grid item xs={12} sm={5} md={5} lg={4} xl={2} align="left">
        <h2>Flappy Bird</h2><br />
        Ahh.. the ever so famous Flappy Bird... here is my rendition of it promoting the beautiful Philippine islands. Here I utilize the canvas html object and created a simple gameloop to run the entire game logic./
        <br /><br />
        <i>Note: This is not a full game at the moment! I will still have to add the collision detection, scoring and fancy font styles.</i>
      </Grid>
      <Grid item xs={12} sm={7} md={7} lg={8} xl={10}>

        <canvas id="viewport" ref="canvas" height={270} width={360} onClick={self.onTouchScreen}>
          Canvas not supported by browser
        </canvas>
        <img ref="background" src="/images/games/flappy/background.png" className="hidden" />
        <img ref="bird" src={birdImg} className="hidden" />
        <img ref="mountain" src="/images/games/flappy/mountain.png" className="hidden" />
        <img ref="road" src="/images/games/flappy/road.png" className="hidden" />
        <img ref="cloud1" src="/images/games/flappy/cloud1.png" className="hidden" />
        <img ref="ship_medium" src="/images/games/flappy/ship_medium.png" className="hidden" />
        <img ref="glider" src="/images/games/flappy/hangglider.png" className="hidden" />
        <img ref="morefun" src="/images/games/flappy/morefun.png" className="hidden" />
      </Grid>
    </Grid>
  }
}