import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";

// Highlight item
export function highlightLevel(levelElement: Element): void {
  const levelItems = getElementsArray(Selector.LevelItem);

  levelItems.forEach((item) => item.classList.remove("level--current"));
  levelElement?.classList.add("level--current");
}
