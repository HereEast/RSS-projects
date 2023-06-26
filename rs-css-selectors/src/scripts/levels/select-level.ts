import { Selector } from "../../types/enums";
import { getTarget } from "../../utils/get-target";
import { getClosestElement } from "../../utils/get-element";
import { highlightLevel } from "./highlight-item";
import { updateLevelCount } from "./update-count";

// Select level
export function handleLevelSelect(e: Event): void {
  const target = getTarget(e);
  const levelItem = getClosestElement(target, Selector.LevelItem);

  highlightLevel(levelItem);
  updateLevelCount(levelItem);
}
