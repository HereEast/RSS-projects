import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getSavedStatus } from "../localStorage/get-saved-status";

// Header
export function setHeaderStatusIcon(id: string): void {
  const headerElement = getElement(Selector.HeaderLevelInfo);
  const levelStatus = getSavedStatus(id);

  const currentClasses = [...headerElement.classList];

  currentClasses.forEach((item) => {
    if (item.includes("level--")) {
      headerElement.classList.remove(item);
    }
  });

  headerElement.classList.add(levelStatus);
}

// Panel
export function setPanelStatusIcon(id: string): void {
  const listItem = document.querySelector(`[data-id="${id}"]`);
  listItem?.classList.add("level--done");
}
