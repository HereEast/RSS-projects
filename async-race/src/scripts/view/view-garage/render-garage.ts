import { toggleUIElements } from "../interface/toggle-elements";
import { View } from "../../../types/types";
import { getCarsAPI } from "../../api/get-cars";
import { setCount, saveView, getCurrentView } from "../../utils/helpers";
import { appendTracks } from "./tracks/append-tracks";

// PAGE
export async function renderGaragePage(page: number): Promise<void> {
  const cars = await getCarsAPI(page);
  setCount(cars);
  appendTracks(cars);
}

// GARAGE
export async function renderGarageView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Garage) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonGarage);

  saveView(View.Garage);
  toggleUIElements(View.Garage);

  const page = 1;
  renderGaragePage(page);

  console.log("🙂 Garage View");
}
