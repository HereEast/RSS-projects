import { saveView, getCurrentView } from "../../_utils/save-view";
import { toggleViewButton } from "../../menu/toggle-active-button";
import { View } from "../../../types/enums";
import { toggleFormsDisplay } from "../../menu/toggle-header-forms";

// Render
export function renderWinnersView(e?: Event): void {
  if (getCurrentView() === View.Winners) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonWinners);

  toggleViewButton(View.Winners);
  toggleFormsDisplay(View.Winners);
  saveView("winners");

  console.log("Winner View", e?.target);
}
