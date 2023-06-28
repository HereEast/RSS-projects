import { Levels } from "../../types/types";
import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getLevelData } from "../../utils/get-level-data";

// Graphics
export function updateGraphics(id: string, levelsData: Levels): void {
  const graphicsContainer = getElement(Selector.GraphicsContainer);
  const levelData = getLevelData(id, levelsData);
  const levelCode = levelData.code;

  graphicsContainer.innerHTML = "";
  graphicsContainer.insertAdjacentHTML("afterbegin", levelCode);
}
