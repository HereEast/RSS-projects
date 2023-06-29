import { levelsData } from "../../data/levels-data";
import { LevelStatus, Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getLevelData } from "../../utils/get-level-data";
import { getTarget } from "../../utils/get-target";
import { saveResult } from "../localStorage/save-result";
import { getCurrentLevelID } from "../localStorage/get-current-id";
import { setHeaderStatusIcon, setPanelStatusIcon } from "./set-status-icon";
import { isWin } from "./check-win";
import { handleWrongAnswer } from "./wrong-answer";
// import { nextLevel } from "../levels/next-level";

// Handle answer
export function handleAnswer(e: Event): void {
  if (e.type === "click") {
    const button = getTarget(e);

    if (!(button instanceof HTMLButtonElement)) {
      throw Error("Target is not an HTMLButtonElement...");
    }
  }

  const input = getElement(Selector.Input);
  if (!(input instanceof HTMLInputElement)) throw Error("Target is not an HTMLInputElement...");

  // if (!input.value.trim()) return;

  const currentID = getCurrentLevelID();
  const levelData = getLevelData(currentID, levelsData);

  const isCorrect = input.value.trim() === levelData.answer;

  if (isCorrect) {
    saveResult(currentID, LevelStatus.Done);

    setPanelStatusIcon(currentID);
    setHeaderStatusIcon(currentID);

    if (isWin()) {
      console.log("🥳 Win!");
      // Handle win
    } else {
      // Handle correct answer
      // nextLevel();
    }
  }

  if (!isCorrect) {
    console.log("⛔️ Wrong answer!");
    handleWrongAnswer();
  }
}
