import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

// Update level on the panel
export function updateLevelCount(id: string): void {
  const panelSpan = getElement(Selector.PanelHeaderLevelNumber);
  const headerSpan = getElement(Selector.MobileHeaderLevelNumber);

  panelSpan.textContent = `${id}/10`;
  headerSpan.textContent = `${id}/10`;
}
