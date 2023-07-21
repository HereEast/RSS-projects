import { saveView, getCurrentView } from "../../utils/save-view";
import { toggleUIElements } from "../toggle-UI/toggle-elements";
import { View } from "../../../types/types";
// import { toggleFormsDisplay } from "../toggle-UI/toggle-header-forms";
// import { toggleViewHeader } from "../toggle-UI/toggle-view-header";
import { cleanView } from "../../utils/clean-element";

// Render
export function renderWinnersView(e?: Event): void {
  if (e && getCurrentView() === View.Winners) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonWinners);

  cleanView();
  toggleUIElements(View.Winners);
  saveView("winners");

  console.log("Winner View", e?.target);
}
