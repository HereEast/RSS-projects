import { saveView, getCurrentView } from "../_utils/save-view";
import { getTarget } from "../_utils/get-target";
import { setActiveButton } from "../menu/set-active-button";
import { getElement } from "../_utils/get-element";
import { Selector, View } from "../../_types/enums";

// Render
export function renderWinnersView(e?: Event): void {
  if (getCurrentView() === View.Winners) return;

  const button = e ? getTarget(e) : getElement(Selector.ButtonWinners);

  setActiveButton(button);
  saveView("winners");

  console.log("Winner View");
}
