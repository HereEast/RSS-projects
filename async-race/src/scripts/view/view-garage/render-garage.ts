import { saveView, getCurrentView } from "../../utils/save-view";
import { toggleViewButton } from "../toggle-active-button";
import { View } from "../../../types/enums";
import { toggleFormsDisplay } from "../toggle-header-forms";
import { toggleViewHeader } from "../toggle-view-header";

// Render
export function renderGarageView(e?: Event): void {
  if (getCurrentView() === View.Garage) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonGarage);

  toggleViewButton(View.Garage);
  toggleFormsDisplay(View.Garage);
  toggleViewHeader(View.Garage);
  saveView(View.Garage);

  console.log("Garage View", e?.target);
}
