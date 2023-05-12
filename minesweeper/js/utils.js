export { positionFree };

// Position free
function positionFree(arr, el) {
  const posExists = arr.some((arrElement) => {
    return arrElement.x === el.x && arrElement.y === el.y;
  });

  return !posExists;
}
