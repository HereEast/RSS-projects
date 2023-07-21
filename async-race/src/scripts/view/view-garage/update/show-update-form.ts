import { getElement, getFormInputs } from "../../../utils/get-element";
import { Selector, Car } from "../../../../types/types";

// SET INPUTS
export function setEditInputs(car: Car): void {
  const { inputText, inputColor } = getFormInputs(Selector.FormUpdate);

  inputText.value = car.name;
  inputColor.value = car.color;
}

// SHOW
export function showUpdateForm(car: Car): void {
  setEditInputs(car);

  console.log(car);

  const form = getElement(Selector.FormUpdate);
  form.classList.add(Selector.FormUpdateOpen.slice(1));

  form.dataset.editId = String(car.id);
}

// HIDE
export function hideUpdateForm(): void {
  const form = getElement(Selector.FormUpdate);
  form.classList.remove(Selector.FormUpdateOpen.slice(1));
}
