export { isSuccess };

//
// CHECK SUCCESS
function isSuccess(tiles, minesCount) {
  const closedTiles = tiles.filter((tile) => {
    return tile.dataset.state === "hidden" || tile.dataset.state === "marked";
  });

  return closedTiles.length === minesCount;
}