import { Selector } from "../../types/enums";
import { getTarget } from "../../utils/get-target";
import { getClosestElement } from "../../utils/get-element";
import { getLevelIDFromElement } from "../../utils/get-id";
import { levelsData } from "../../data/levels-data";
import { saveLevel } from "./save-level";
import { renderSelectedLevel } from "./render-level";

// Select level
export function handleLevelSelect(e: Event): void {
  const target = getTarget(e);
  const selectedLevel = getClosestElement(target, Selector.DatasetID);
  const levelID = getLevelIDFromElement(selectedLevel);

  renderSelectedLevel(levelID, levelsData);
  saveLevel(levelID);
}
