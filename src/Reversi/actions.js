"use strict";

function validateCaptureChain(board_tiles, x, y, player, capture_count, flip_opposing_tiles = false) {
  if (x < 0 || x > 7 || y < 0 || y > 7) {
    return -1;
  } else if (board_tiles[x][y] === player && capture_count > 0) {
    return 0; // found the edge so mark for capture completion
  } else if (board_tiles[x][y] === (player * -1)) {
    if (flip_opposing_tiles) board_tiles[x][y] = player;
    return 1; // increment (actual/potential) captures
  } else {
    return -1; // nothing to capture so terminate any further search
  }
}

function captureDirection(board_tiles, startX, dirX, startY, dirY, player, flip_opposing_tiles) {
  let capture_count = 0;
  let x = startX + dirX;
  let y = startY + dirY;
  while (true) {
    let action = validateCaptureChain(board_tiles, x, y, player, capture_count, flip_opposing_tiles);
    switch (action) {
      case 1:
        capture_count++;
        break;
      case 0:
        return capture_count;
      default:
        return 0;
    }
    x += dirX;
    y += dirY;
  }
}

function captureNorth(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, 0, targetY, -1, player, flip_opposing_tiles);
}

function captureSouth(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, 0, targetY, 1, player, flip_opposing_tiles);
}

function captureWest(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, -1, targetY, 0, player, flip_opposing_tiles);
}

function captureEast(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, 1, targetY, 0, player, flip_opposing_tiles);
}

function captureNorthEast(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, 1, targetY, -1, player, flip_opposing_tiles);
}

function captureNorthWest(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, -1, targetY, -1, player, flip_opposing_tiles);
}

function captureSouthEast(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, 1, targetY, 1, player, flip_opposing_tiles);
}

function captureSouthWest(board_tiles, targetX, targetY, player, flip_opposing_tiles) {
  return captureDirection(board_tiles, targetX, -1, targetY, 1, player, flip_opposing_tiles);
}

function captureTile(board_tiles, targetX, targetY, player) {
  const capture_count = {
    total: 0,
    north: 0,
    south: 0,
    east: 0,
    west: 0,
    northeast: 0,
    northwest: 0,
    southeast: 0,
    southwest: 0
  };

  //verify tiles where by counting potential captured tiles
  capture_count.north = captureNorth(board_tiles, targetX, targetY, player);
  capture_count.south = captureSouth(board_tiles, targetX, targetY, player);
  capture_count.east = captureEast(board_tiles, targetX, targetY, player);
  capture_count.west = captureWest(board_tiles, targetX, targetY, player);
  capture_count.northeast = captureNorthEast(board_tiles, targetX, targetY, player);
  capture_count.northwest = captureNorthWest(board_tiles, targetX, targetY, player);
  capture_count.southeast = captureSouthEast(board_tiles, targetX, targetY, player);
  capture_count.southwest = captureSouthWest(board_tiles, targetX, targetY, player);
  capture_count.total = capture_count.north + capture_count.south + capture_count.east + capture_count.west
    + capture_count.northeast + capture_count.northwest + capture_count.southeast + capture_count.southwest;
  if (capture_count.total > 0) {
    // capture marked tiles
    if (capture_count.north > 0) captureNorth(board_tiles, targetX, targetY, player, true);
    if (capture_count.south > 0) captureSouth(board_tiles, targetX, targetY, player, true);
    if (capture_count.east > 0) captureEast(board_tiles, targetX, targetY, player, true);
    if (capture_count.west > 0) captureWest(board_tiles, targetX, targetY, player, true);
    if (capture_count.northeast > 0) captureNorthEast(board_tiles, targetX, targetY, player, true);
    if (capture_count.northwest > 0) captureNorthWest(board_tiles, targetX, targetY, player, true);
    if (capture_count.southeast > 0) captureSouthEast(board_tiles, targetX, targetY, player, true);
    if (capture_count.southwest > 0) captureSouthWest(board_tiles, targetX, targetY, player, true);
  }

  return capture_count.total;
}

export default {
  captureTile
}