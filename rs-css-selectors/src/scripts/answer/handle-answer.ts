import { levelsData } from "../../data/levels-data";
import { LevelStatus, Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getLevelData } from "../../utils/get-level-data";
import { getTarget } from "../../utils/get-target";
import { saveResult } from "../localStorage/save-result";
import { getCurrentLevelID } from "../localStorage/get-current-id";
import { setHeaderStatusIcon, setPanelStatusIcon } from "./set-status-icon";
// import { nextLevel } from "../levels/next-level";

export function handleAnswer(e: Event): void {
  const button = getTarget(e);
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) throw Error("Target is not an HTMLInputElement...");
  if (!(button instanceof HTMLButtonElement)) throw Error("Target is not an HTMLButtonElement...");

  const currentID = getCurrentLevelID();
  const levelData = getLevelData(currentID, levelsData);

  const isCorrect = input.value.trim() === levelData.answer;

  if (isCorrect) {
    saveResult(currentID, LevelStatus.Done);

    setPanelStatusIcon(currentID);
    setHeaderStatusIcon(currentID);

    // Next level
    // nextLevel();
  }
}
