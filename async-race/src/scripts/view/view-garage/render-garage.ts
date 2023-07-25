import { View } from "../../../types/types";
import { getCarsAPI } from "../../api/get-cars";
import { toggleUIElements } from "../toggle/toggle-elements";
import { getCurrentPage } from "../../utils/pagination-helpers";
import { updatePagination } from "./pages/page-utils";
import { saveCurrentView, getCurrentView } from "../../utils/helpers";
import { setTotalCars } from "../../utils/total-helpers";
import { appendTracks } from "./tracks/append-tracks";
import { togglePageButtons } from "./pages/toggle-pagination";

// Update Garage
export async function updateGarage(page: number): Promise<void> {
  const cars = await getCarsAPI(page);

  appendTracks(cars);
  setTotalCars(cars.count);
  updatePagination(page);
  togglePageButtons();
}

// Render Garage view
export async function renderGarageView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Garage) return;

  saveCurrentView(View.Garage);
  toggleUIElements(View.Garage);

  const page = getCurrentPage(View.Garage);
  await updateGarage(page);

  console.log("Render:", localStorage);
  console.log("🙂 Garage View");
}
