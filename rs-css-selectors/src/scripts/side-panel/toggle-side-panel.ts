import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getTarget } from "../../utils/get-target";

// Toggle panel
export function togglePanel(e: Event): void {
  if (window.innerWidth > 980) return;

  const target = getTarget(e, HTMLButtonElement);

  if (!target.closest(Selector.ShowLevelsBtn) && !target.closest(Selector.HideLevelsBtn)) return;

  const levelsPanel = getElement(Selector.LevelsPanel);
  const isPanelOpened = levelsPanel?.classList.contains("panel--visible");

  if (target.closest(Selector.ShowLevelsBtn) && !isPanelOpened) {
    levelsPanel?.classList.add("panel--visible");
  }

  if (target.closest(Selector.HideLevelsBtn) && isPanelOpened) {
    levelsPanel?.classList.remove("panel--visible");
  }
}
