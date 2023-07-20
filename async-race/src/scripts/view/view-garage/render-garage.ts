import { saveView, getCurrentView } from "../../utils/save-view";
import { toggleViewButton } from "../toggle-active-button";
import { View, CarsData } from "../../../types/enums";
import { toggleFormsDisplay } from "../toggle-header-forms";
import { toggleViewHeader } from "../toggle-view-header";
import { getCars } from "../../api/get-cars";
import { setCarsCount } from "../set-cars-count";
import { renderTracks } from "./tracks/render-tracks";

// Page
export function renderPage(cars: CarsData): void {
  setCarsCount(cars);
  renderTracks(cars);
}

// Render
export function renderGarageView(e?: Event): void {
  if (e && getCurrentView() === View.Garage) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonGarage);

  toggleViewButton(View.Garage);
  toggleFormsDisplay(View.Garage);
  toggleViewHeader(View.Garage);
  saveView(View.Garage);

  const page = 1;
  getCars(page).then((cars) => renderPage(cars));

  console.log("🙂 Garage View", e?.target);
}
