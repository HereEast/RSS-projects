import { Selector } from "../../../../types/types";
import { getFormInputs } from "../../../utils/get-element";
import { hideUpdateForm } from "./display-update-form";
import { updateCarAPI } from "../../../api/update-car";
import { updateCarUI } from "./update-car-ui";
import { getEditCarData } from "../../../utils/helpers";

// Handle update
export async function handleUpdate(e: Event): Promise<void> {
  e.preventDefault();

  const { inputText, inputColor } = getFormInputs(Selector.FormUpdate);
  const editCar = getEditCarData();

  if (!inputText.value.trim()) {
    inputText.focus();
    return;
  }

  if (inputText.value === editCar.name && inputColor.value === editCar.color) {
    hideUpdateForm(e);
    return;
  }

  const id = editCar.id;

  const patch = {
    name: inputText.value,
    color: inputColor.value,
  };

  await updateCarAPI(id, patch);

  updateCarUI(id, patch);
  hideUpdateForm(e);
}
