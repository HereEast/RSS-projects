// ID from level element
export function getLevelIdFromElement(levelItem: HTMLElement): string {
  const levelID = levelItem.dataset.id;
  if (!levelID) throw Error("Level ID is not defined...");

  return levelID;
}
