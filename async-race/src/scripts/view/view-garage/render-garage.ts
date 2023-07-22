import { toggleUIElements } from "../toggle/toggle-elements";
import { View } from "../../../types/types";
import { getCarsAPI } from "../../api/get-cars";
import { saveCurrentView, getCurrentView } from "../../utils/save-view";
import { setTotalCount } from "../../utils/total-count";
import { appendTracks } from "./tracks/append-track";

// Update Garage
export async function updateGarage(page: number): Promise<void> {
  const cars = await getCarsAPI(page);

  setTotalCount(cars);
  appendTracks(cars);
}

// Render Garage view
export async function renderGarageView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Garage) return;

  saveCurrentView(View.Garage);
  toggleUIElements(View.Garage);

  const page = 1;
  updateGarage(page);

  console.log("🙂 Garage View");
}
