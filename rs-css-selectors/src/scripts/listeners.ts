import { Selector } from "../types/enums";
import { getElement } from "../utils/get-element";
import { togglePanel } from "./side-panel/toggle-side-panel";
import { handleLevelSelect } from "./levels/select-level";

// Listeners
export function initListeners(): void {
  const showButton = getElement(Selector.ShowLevelsBtn);
  const hideButton = getElement(Selector.HideLevelsBtn);
  const levelsContainer = getElement(Selector.LevelsContainer);

  // console.log(levelsContainer);

  showButton.addEventListener("click", togglePanel);
  hideButton.addEventListener("click", togglePanel);
  levelsContainer.addEventListener("click", handleLevelSelect);
}
