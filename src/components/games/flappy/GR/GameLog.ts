import Game from "./Game";

export enum GameLogLevels {
  warn, info, debug
}

export default class GameLog {
  logLevel: GameLogLevels;
  game: Game;

  constructor(game: Game, logLevel: GameLogLevels) {
    this.logLevel = logLevel;
    this.game = game;
  }

  /**
   * Debug messages will show only when level is debug
   * @param message 
   */
  debug(message: string) {
    if (this.logLevel == GameLogLevels.debug) {
      console.log(`[GID${this.game.instanceID}][DEBUG] ${message}`)
    }
  }

  /**
   * Info messages will show when the level is info or greater
   * @param message 
   */
  info(message: string) {
    if (this.logLevel >= GameLogLevels.info) {
      console.log(`[GID${this.game.instanceID}][INFO] ${message}`)
    }
  }

  /**
     * Warn messages will show when the level is warn or greater
     * @param message 
     */
  warn(message: string) {
    if (this.logLevel >= GameLogLevels.warn) {
      console.log(`[GID${this.game.instanceID}][WARN] ${message}`)
    }
  }
}
