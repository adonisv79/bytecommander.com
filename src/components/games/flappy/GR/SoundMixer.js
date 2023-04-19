'use client';

let sources;
let channels;

function getNextAvailableChannel() {
  for (let i = 0; i < channels.length; i += 1) {
    if (isNaN(channels[i].duration)
      || channels[i].ended
      || (channels[i].duration <= 0 && channels[i].paused)) {
      return channels[i];
    }
  }
  throw new Error('Too much audio playing at once');
}

export default class SoundMixer {
  constructor(game, channelCount = 10) {
    this.game = game;
    sources = {};
    channels = [];
    if (typeof self !== 'undefined') {
      for (let i = 0; i < channelCount; i += 1) {
        channels[i] = new Audio();
        channels[i].muted = true;
      }
    }
  }

  addSource(id, path) {
    if (sources[id]) {
      throw new Error(`Sound source '${id}' already exists`);
    }
    sources[id] = path;
  }

  play(id) {
    if (!sources[id]) {
      throw new Error(`Sound source '${id}' does not exist`);
    }
    if (typeof window !== 'undefined') {
      const ch = getNextAvailableChannel();
      ch.src = sources[id];
      ch.muted = false;
      ch.play();
    }
  }

  stop() {
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
