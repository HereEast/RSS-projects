import { Selector, View } from "../../../../types/types";
import { getFormInputs } from "../../../utils/get-element";
import { createCarAPI } from "../../../api/create-car";
import { setTotalPages } from "../pages/page-utils";
import { updateTotalCars } from "../../../utils/total-helpers";
import { appendTrack } from "../tracks/append-tracks";
import { isLastPage, isEnoughSpace } from "../../../utils/pagination-helpers";
import { togglePageButtons } from "../pages/toggle-pagination";

// Handle create
export async function handleCreateCar(e: Event): Promise<void> {
  e.preventDefault();

  const { inputText, inputColor } = getFormInputs(Selector.FormCreate);

  const name = inputText.value;
  const color = inputColor.value;

  if (!name) {
    inputText.focus();
    return;
  }

  const newCar = await createCarAPI({ name, color });

  if (isLastPage(View.Garage) && isEnoughSpace()) {
    appendTrack(newCar);
  }

  updateTotalCars(1);
  setTotalPages();
  togglePageButtons();

  inputText.value = "";

  console.log("Create:", localStorage);
}
