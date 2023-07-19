import { saveView, getCurrentView } from "../../_utils/save-view";
import { toggleViewButton } from "../../menu/toggle-active-button";
import { View } from "../../../types/enums";
import { toggleFormsDisplay } from "../../menu/toggle-header-forms";
import { toggleViewHeader } from "../togggle-view-header";

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
