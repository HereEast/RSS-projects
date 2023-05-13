export { positionExists, getMinesPositions };

// GET ARRAY OFF MINES
function getMinesPositions(size, minesCount) {
  const positions = [];

  while (positions.length < minesCount) {
    const pos = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size)
    };

    if (!positionExists(positions, pos)) {
      positions.push(pos);
    }
  }

  return positions;
}

// POSITION EXISTS IN ARRAY
function positionExists(arr, el) {
  const posExists = arr.some((arrElement) => {
    return arrElement.x === el.x && arrElement.y === el.y;
  });

  return posExists;
}
