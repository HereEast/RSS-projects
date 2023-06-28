import { levelsData } from "../../data/levels-data";
import { ClassName, Selector } from "../../types/enums";
import { Info } from "../../types/enums";
import { getClosestElement } from "../../utils/get-element";
import { getTarget } from "../../utils/get-target";
import { renderSelectedLevel } from "./render-level";
import { saveLevel } from "./save-level";

// Switch levels on PREV / NEXT
export function switchLevel(e: Event): void {
  const target = getTarget(e);
  const button = getClosestElement(target, Selector.LevelsButton);

  const currentID = window.localStorage.getItem("level");

  // Next
  if (button.classList.contains(ClassName.NextButton)) {
    let nextLevelID = Number(currentID) + 1;
    if (nextLevelID > Info.TotalLevels) nextLevelID = 1;

    renderSelectedLevel(String(nextLevelID), levelsData);
    saveLevel(String(nextLevelID));
  }

  // Prev
  if (button.classList.contains(ClassName.PrevButton)) {
    let prevLevelID = Number(currentID) - 1;
    if (prevLevelID < 1) prevLevelID = Info.TotalLevels;

    renderSelectedLevel(String(prevLevelID), levelsData);
    saveLevel(String(prevLevelID));
  }
}
