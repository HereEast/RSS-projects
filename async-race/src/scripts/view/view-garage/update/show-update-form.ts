import { getElement, getTarget, getClosest, getFormInputs } from "../../../utils/get-element";
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
export function hideUpdateForm(e: Event): void {
  const target = getTarget(e);
  const isFormElement = getClosest(target, Selector.FormUpdate);
  const isCancelButton = target.id.includes(Selector.ButtonCancel.slice(1));
  const isUpdateButton = target.id.includes(Selector.ButtonUpdate.slice(1));

  if (isFormElement && !isCancelButton && !isUpdateButton) return;

  const form = getElement(Selector.FormUpdate);
  form.classList.remove(Selector.FormUpdateOpen.slice(1));
}
