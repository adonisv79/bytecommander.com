function validateCaptureChain(boardTiles, x, y, player, captureCount, flipOpponents = false) {
  if (x < 0 || x > 7 || y < 0 || y > 7) {
    return -1;
  } else if (boardTiles[x][y] === player && captureCount > 0) {
    return 0; // found the edge so mark for capture completion
  } else if (boardTiles[x][y] === (player * -1)) {
    if (flipOpponents) boardTiles[x][y] = player;
    return 1; // increment (actual/potential) captures
  }

  return -1; // nothing to capture so terminate any further search
}

function captureDirection(boardTiles, startX, dirX, startY, dirY, player, flipOpponents) {
  let captureCount = 0;
  let x = startX + dirX;
  let y = startY + dirY;
  while (true) {
    const action = validateCaptureChain(boardTiles, x, y, player, captureCount, flipOpponents);
    switch (action) {
      case 1:
        captureCount += 1;
        break;
      case 0:
        return captureCount;
      default:
        return 0;
    }
    x += dirX;
    y += dirY;
  }
}

function captureNorth(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, 0, targetY, -1, player, flipOpponents);
}

function captureSouth(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, 0, targetY, 1, player, flipOpponents);
}

function captureWest(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, -1, targetY, 0, player, flipOpponents);
}

function captureEast(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, 1, targetY, 0, player, flipOpponents);
}

function captureNorthEast(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, 1, targetY, -1, player, flipOpponents);
}

function captureNorthWest(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, -1, targetY, -1, player, flipOpponents);
}

function captureSouthEast(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, 1, targetY, 1, player, flipOpponents);
}

function captureSouthWest(boardTiles, targetX, targetY, player, flipOpponents) {
  return captureDirection(boardTiles, targetX, -1, targetY, 1, player, flipOpponents);
}

function captureTile(boardTiles, targetX, targetY, player) {
  const captureCount = {
    total: 0,
    north: 0,
    south: 0,
    east: 0,
    west: 0,
    northeast: 0,
    northwest: 0,
    southeast: 0,
    southwest: 0,
  };

  // verify tiles where by counting potential captured tiles
  captureCount.north = captureNorth(boardTiles, targetX, targetY, player);
  captureCount.south = captureSouth(boardTiles, targetX, targetY, player);
  captureCount.east = captureEast(boardTiles, targetX, targetY, player);
  captureCount.west = captureWest(boardTiles, targetX, targetY, player);
  captureCount.northeast = captureNorthEast(boardTiles, targetX, targetY, player);
  captureCount.northwest = captureNorthWest(boardTiles, targetX, targetY, player);
  captureCount.southeast = captureSouthEast(boardTiles, targetX, targetY, player);
  captureCount.southwest = captureSouthWest(boardTiles, targetX, targetY, player);
  captureCount.total = captureCount.north + captureCount.south + captureCount.east
    + captureCount.west + captureCount.northeast + captureCount.northwest
    + captureCount.southeast + captureCount.southwest;
  if (captureCount.total > 0) {
    // capture marked tiles
    if (captureCount.north > 0) captureNorth(boardTiles, targetX, targetY, player, true);
    if (captureCount.south > 0) captureSouth(boardTiles, targetX, targetY, player, true);
    if (captureCount.east > 0) captureEast(boardTiles, targetX, targetY, player, true);
    if (captureCount.west > 0) captureWest(boardTiles, targetX, targetY, player, true);
    if (captureCount.northeast > 0) captureNorthEast(boardTiles, targetX, targetY, player, true);
    if (captureCount.northwest > 0) captureNorthWest(boardTiles, targetX, targetY, player, true);
    if (captureCount.southeast > 0) captureSouthEast(boardTiles, targetX, targetY, player, true);
    if (captureCount.southwest > 0) captureSouthWest(boardTiles, targetX, targetY, player, true);
  }

  return captureCount.total;
}

export default {
  captureTile,
};
