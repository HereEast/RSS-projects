import { Selector } from "../types/types";
import { getElement } from "./utils/get-element";
import { renderGarageView } from "./view/view-garage/render-garage";
import { renderWinnersView } from "./view/view-winners/render-winners";
import { handleCreateCar } from "./view/view-garage/handle-create/handle-create";
import { cancelUpdate } from "./view/view-garage/handle-update/start-update";
import { handleUpdate } from "./view/view-garage/handle-update/handle-update";
import { handleGenerate } from "./view/view-garage/handle-generate/handle-generate";
import { handlePagination } from "./view/view-garage/pages/handle-pagination";
import { handleReset, handleRace } from "./view/view-garage/handle-race/handle-race";

// Listeners
export function initListeners(): void {
  const garageButton = getElement(Selector.ButtonGarage);
  const winnersButton = getElement(Selector.ButtonWinners);
  const createButton = getElement(Selector.ButtonCreate);
  const cancelEditButton = getElement(Selector.ButtonCancel);
  const updateButton = getElement(Selector.ButtonUpdate);
  const buttonGenerate = getElement(Selector.ButtonGenerate);
  const buttonPrev = getElement(Selector.ButtonPrev);
  const buttonNext = getElement(Selector.ButtonNext);
  const buttonReset = getElement(Selector.ButtonReset);
  const buttonRace = getElement(Selector.ButtonRace);

  // Events
  garageButton.addEventListener("click", renderGarageView);
  winnersButton.addEventListener("click", renderWinnersView);
  createButton.addEventListener("click", handleCreateCar);
  cancelEditButton.addEventListener("click", cancelUpdate);
  updateButton.addEventListener("click", handleUpdate);
  buttonGenerate.addEventListener("click", handleGenerate);
  buttonPrev.addEventListener("click", handlePagination);
  buttonNext.addEventListener("click", handlePagination);
  buttonReset.addEventListener("click", handleReset);
  buttonRace.addEventListener("click", handleRace);
}
