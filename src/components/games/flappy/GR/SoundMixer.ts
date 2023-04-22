import Game from "./Game";;

let self: SoundMixer;
let sources: { [key: string]: any };
let channels: HTMLAudioElement[];

function getNextAvailableChannel() {
  for (let i = 0; i < channels.length; i += 1) {
    if (isNaN(channels[i].duration)
      || channels[i].ended
      || (channels[i].duration >= 0 && channels[i].paused)) {

      self.game.logger.debug(`Activated audio channel ${i}`)
      return channels[i];
    }
  }
  throw new Error('Too much audio playing at once');
}

export default class SoundMixer {
  game: Game;
  channelCount: number

  constructor(game: Game, channelCount = 10) {
    this.game = game;
    sources = [];
    channels = [];
    this.channelCount = channelCount;
    self = this;
  }

  onReady() {
    for (let i = 0; i < self.channelCount; i += 1) {
      channels[i] = new Audio();
      channels[i].muted = true;
    }
  }

  addSource(id: string, path: string) {
    if (sources[id]) {
      throw new Error(`Sound source '${id}' already exists`);
    }
    sources[id] = path;
  }

  play(id: string) {
    if (!sources[id]) {
      throw new Error(`Sound source '${id}' does not exist`);
    }
    if (typeof window !== 'undefined') {
      const ch = getNextAvailableChannel();
      ch.src = sources[id];
      ch.muted = false;
      self.game.logger.info(`Playing ${id} on new channel`)
      ch.play();
    }
  }

  stop() {
    self.game.logger.info('Pausing audio channels')
    if (typeof window !== 'undefined') {
      for (let i = 0; i < channels.length; i += 1) {
        if (!channels[i].ended || !channels[i].paused) {
          channels[i].pause();
          channels[i].muted = true;
        }
      }
    }
  }
}
