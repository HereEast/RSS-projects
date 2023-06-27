import { Selector } from "../../types/enums";
import { getTarget } from "../../utils/get-target";
import { getClosestElement } from "../../utils/get-element";
import { highlightLevel } from "./highlight-item";
import { updateLevelCount } from "./update-count";
import { getLevelIDFromElement } from "../../utils/get-id";
import { levelsData } from "../../data/levels-data";
import { updateTaskTitle } from "./task-title";
import { saveLevel } from "./save-level";

// Select level
export function handleLevelSelect(e: Event): void {
  const target = getTarget(e);
  const selectedLevel = getClosestElement(target, Selector.DatasetID);
  const levelID = getLevelIDFromElement(selectedLevel);

  highlightLevel(levelID);

  updateLevelCount(levelID);
  updateTaskTitle(levelID, levelsData);

  saveLevel(levelID);
}
