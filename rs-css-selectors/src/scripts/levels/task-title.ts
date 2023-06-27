import { Levels } from "../../types/types";
import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

export function updateTaskTitle(id: string, levelsData: Levels): void {
  const taskElement = getElement(Selector.TaskText);
  const level = levelsData.find((data) => data.id === id);

  if (!level) throw Error("Level is not found...");

  taskElement.textContent = level?.task;
}
