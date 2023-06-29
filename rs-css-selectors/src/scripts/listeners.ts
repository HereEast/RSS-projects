import { Selector } from "../types/enums";
import { getElement } from "../utils/get-element";
import { togglePanel } from "./side-panel/toggle-side-panel";
import { handleLevelSelect } from "./levels/select-level";
import { switchLevel } from "./levels/switch-level";
import { handleAnswer } from "./answer/handle-answer";
import { handleInput } from "./answer/handle-input";

// Listeners
export function initListeners(): void {
  const showButton = getElement(Selector.ShowLevelsBtn);
  const hideButton = getElement(Selector.HideLevelsBtn);
  const levelsContainer = getElement(Selector.LevelsContainer);
  const levelButtons = getElement(Selector.LevelsButtons);
  const checkButton = getElement(Selector.CheckButton);
  const input = getElement(Selector.Input);

  // console.log(levelsContainer);

  showButton.addEventListener("click", togglePanel);
  hideButton.addEventListener("click", togglePanel);
  levelsContainer.addEventListener("click", handleLevelSelect);
  levelButtons.addEventListener("click", switchLevel);
  checkButton.addEventListener("click", handleAnswer);
  input.addEventListener("focus", handleInput);
  input.addEventListener("blur", handleInput);
}
