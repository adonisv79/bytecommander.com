import Game from "./Game";;

export default class SoundMixer {
  game: Game;
  channelCount: number;
  sources: { [key: string]: any };
  channels: HTMLAudioElement[];

  constructor(game: Game, channelCount = 10) {
    this.game = game;
    this.sources = [];
    this.channels = [];
    this.channelCount = channelCount;
  }

  onReady() {
    for (let i = 0; i < this.channelCount; i += 1) {
      this.channels[i] = new Audio();
      this.channels[i].muted = true;
    }
  }

  getNextAvailableChannel() {
    for (let i = 0; i < this.channels.length; i += 1) {
      if (isNaN(this.channels[i].duration)
        || this.channels[i].ended
        || (this.channels[i].duration >= 0 && this.channels[i].paused)) {
  
        this.game.logger.debug(`Activated audio channel ${i}`)
        return this.channels[i];
      }
    }
    throw new Error('Too much audio playing at once');
  }

  addSource(id: string, path: string) {
    if (this.sources[id]) {
      throw new Error(`Sound source '${id}' already exists`);
    }
    this.sources[id] = path;
  }

  play(id: string) {
    if (!this.sources[id]) {
      throw new Error(`Sound source '${id}' does not exist`);
    }
    if (typeof window !== 'undefined') {
      const ch = this.getNextAvailableChannel();
      ch.src = this.sources[id];
      ch.muted = false;
      this.game.logger.info(`Playing ${id} on new channel`)
      ch.play();
    }
  }

  stop() {
    this.game.logger.info('Pausing audio channels')
    if (typeof window !== 'undefined') {
      for (let i = 0; i < this.channels.length; i += 1) {
        if (!this.channels[i].ended || !this.channels[i].paused) {
          this.channels[i].pause();
          this.channels[i].muted = true;
        }
      }
    }
  }
}
