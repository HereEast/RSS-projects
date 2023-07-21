import { toggleUIElements } from "../UI/toggle-elements";
import { View } from "../../../types/types";
import { getCarsAPI } from "../../api/get-cars";
import { setTotalCount, saveView, getCurrentView, cleanContent } from "../../utils/helpers";
import { renderTracks } from "./tracks/render-tracks";

// GARAGE
export async function renderGarageView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Garage) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonGarage);

  cleanContent();
  saveView(View.Garage);
  toggleUIElements(View.Garage);

  const page = 1;

  const cars = await getCarsAPI(page);
  setTotalCount(cars);
  renderTracks(cars);

  console.log(localStorage.getItem("totalCars"));
  console.log("🙂 Garage View");
}
