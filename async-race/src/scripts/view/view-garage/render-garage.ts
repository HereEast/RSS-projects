import { saveView, getCurrentView } from "../../utils/save-view";
import { toggleUIElements } from "../toggle-UI/toggle-elements";
import { View } from "../../../types/types";
import { getCars } from "../../api/get-cars";
import { setTotalCount } from "../../utils/helpers";
import { renderTracks } from "./tracks/render-tracks";
import { cleanView } from "../../utils/clean-element";

// GARAGE
export async function renderGarageView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Garage) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonGarage);

  cleanView();
  toggleUIElements(View.Garage);
  saveView(View.Garage);

  const page = 1;

  const cars = await getCars(page);
  setTotalCount(cars);
  renderTracks(cars);

  console.log(localStorage.getItem("totalCars"));
  console.log("🙂 Garage View");
}
