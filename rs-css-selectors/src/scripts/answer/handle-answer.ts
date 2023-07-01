import { levelsData } from "../../data/levels-data";
import { LevelStatus, Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getLevelData } from "../../utils/get-level-data";
import { saveStatus } from "../localStorage/save-status";
import { getCurrentLevelID } from "../localStorage/get-current-id";
import { setStatusIcon } from "../levels/status-icon";
import { isWin } from "./check-win";
import { handleWrongAnswer } from "./wrong-answer";
import { hideElementsAnimation } from "./hide-animation";
import { nextLevel } from "../levels/next-level";

// Handle answer
export function handleAnswer(): void {
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  // if (!input.value.trim()) return;

  const currentID = getCurrentLevelID();
  const levelData = getLevelData(currentID, levelsData);

  const isCorrect = input.value.trim() === levelData.answer;

  if (isCorrect) {
    saveStatus(currentID, LevelStatus.Done);
    setStatusIcon(currentID, LevelStatus.Done);

    if (isWin()) {
      console.log("🥳 Win!");
      // Handle win
    } else {
      // Handle correct answer
      hideElementsAnimation();
      setTimeout(nextLevel, 1800);
    }
  }

  if (!isCorrect) {
    console.log("⛔️ Wrong answer!");
    handleWrongAnswer();
  }
}
