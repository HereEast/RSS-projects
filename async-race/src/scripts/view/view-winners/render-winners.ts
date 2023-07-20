import { saveView, getCurrentView } from "../../utils/save-view";
import { toggleViewButton } from "../toggle-active-button";
import { View } from "../../../types/enums";
import { toggleFormsDisplay } from "../toggle-header-forms";
import { toggleViewHeader } from "../toggle-view-header";

// Render
export function renderWinnersView(e?: Event): void {
  if (e && getCurrentView() === View.Winners) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonWinners);

  toggleViewButton(View.Winners);
  toggleFormsDisplay(View.Winners);
  toggleViewHeader(View.Winners);
  saveView("winners");

  console.log("Winner View", e?.target);
}
