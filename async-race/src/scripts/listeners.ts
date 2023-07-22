import { Selector } from "../types/types";
import { getElement } from "./utils/get-element";
import { renderGarageView } from "./view/view-garage/render-garage";
import { renderWinnersView } from "./view/view-winners/render-winners";
import { handleCreateCar } from "./view/view-garage/handle-create/handle-create";
import { cancelUpdate } from "./view/view-garage/handle-update/start-update";
import { handleUpdate } from "./view/view-garage/handle-update/handle-update";
import { hideUpdateForm } from "./view/view-garage/handle-update/handle-form";

// Listeners
export function initListeners(): void {
  const garageButton = getElement(Selector.ButtonGarage);
  const winnersButton = getElement(Selector.ButtonWinners);
  const createButton = getElement(Selector.ButtonCreate);
  const cancelEditButton = getElement(Selector.ButtonCancel);
  const updateButton = getElement(Selector.ButtonUpdate);

  // Events
  document.addEventListener("click", hideUpdateForm);
  garageButton.addEventListener("click", renderGarageView);
  winnersButton.addEventListener("click", renderWinnersView);
  createButton.addEventListener("click", handleCreateCar);
  cancelEditButton.addEventListener("click", cancelUpdate);
  updateButton.addEventListener("click", handleUpdate);
}
