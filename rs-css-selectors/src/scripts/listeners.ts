import { Selector } from "../types/enums";
import { getElement } from "../utils/get-element";
import { togglePanel } from "./side-panel/toggle-side-panel";
import { handleLevelSelect } from "./levels/select-level";
import { nextLevel } from "./levels/next-level";
import { prevLevel } from "./levels/prev-level";
import { handleAnswer } from "./answer/handle-answer";
import { handleInputFocus } from "./answer/handle-input";
import { resetGame } from "./reset/reset";

// Listeners
export function initListeners(): void {
  const showButton = getElement(Selector.ShowLevelsBtn);
  const hideButton = getElement(Selector.HideLevelsBtn);
  const levelsContainer = getElement(Selector.LevelsContainer);
  const nextLevelButton = getElement(Selector.NextLevelButton);
  const prevLevelButton = getElement(Selector.PrevLevelButton);
  const checkButton = getElement(Selector.CheckButton);
  const input = getElement(Selector.Input);
  const resetButton = getElement(Selector.ResetButton);

  // console.log(levelsContainer);

  showButton.addEventListener("click", togglePanel);
  hideButton.addEventListener("click", togglePanel);
  levelsContainer.addEventListener("click", handleLevelSelect);
  nextLevelButton.addEventListener("click", nextLevel);
  prevLevelButton.addEventListener("click", prevLevel);
  checkButton.addEventListener("click", handleAnswer);
  input.addEventListener("focus", handleInputFocus);
  input.addEventListener("blur", handleInputFocus);
  resetButton.addEventListener("click", resetGame);

  window.addEventListener("keydown", (e: KeyboardEvent) => {
    const input = getElement(Selector.Input);
    if (!(input instanceof HTMLInputElement)) throw Error("Target is not an HTMLInputElement...");

    if (input.classList.contains("active") && e.code === "Enter") {
      handleAnswer(e);
    }
  });
}
