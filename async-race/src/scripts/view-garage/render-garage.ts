import { saveView, getCurrentView } from "../_utils/save-view";
import { getTarget } from "../_utils/get-target";
import { setActiveButton } from "../menu/set-active-button";
import { getElement } from "../_utils/get-element";
import { Selector, View } from "../../types/enums";

// Render
export function renderGarageView(e?: Event): void {
  if (getCurrentView() === View.Garage) return;

  const button = e ? getTarget(e) : getElement(Selector.ButtonGarage);

  setActiveButton(button);
  saveView("garage");

  console.log("Garage View");
}
