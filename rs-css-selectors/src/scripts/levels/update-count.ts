import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

// Update level on the panel
export function updateLevelCount(selectedLevel: HTMLElement): void {
  const panelSpan = getElement(Selector.PanelHeaderLevelNumber);
  const headerSpan = getElement(Selector.MobileHeaderLevelNumber);

  const currentCount = selectedLevel.dataset.level;

  if (currentCount) {
    panelSpan.textContent = `${currentCount}/10`;
    headerSpan.textContent = `${currentCount}/10`;
  }
}
