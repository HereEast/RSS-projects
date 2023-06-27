import { Levels } from "../../types/types";
import { highlightLevel } from "./highlight-item";
import { updateLevelCount } from "./update-count";
import { updateTaskTitle } from "./task-title";

// Render selected level
export function renderSelectedLevel(id: string, data: Levels): void {
  highlightLevel(id);

  updateLevelCount(id);
  updateTaskTitle(id, data);
}
