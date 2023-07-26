import { Selector, View } from "../types/types";
import { getElement } from "./utils/get-element";
import { renderGarageView } from "./view/view-garage/render-garage";
import { renderWinnersView } from "./view/view-winners/render-winners";
import { handleCreateCar } from "./view/view-garage/handle-create/handle-create";
import { cancelUpdate } from "./view/view-garage/handle-update/start-update";
import { handleUpdate } from "./view/view-garage/handle-update/handle-update";
import { handleGenerate } from "./view/view-garage/handle-generate/handle-generate";
import { handleGaragePages } from "./view/view-garage/pages/handle-pagination";
import { handleReset, handleRace } from "./view/view-garage/handle-race/handle-race";
// import { handleWinnersPages } from "./view/view-winners/pages/winners-pages";

// Listeners
export function initListeners(): void {
  const buttonGarage = getElement(Selector.ButtonGarage);
  const buttonWinners = getElement(Selector.ButtonWinners);
  const buttonCreate = getElement(Selector.ButtonCreate);
  const buttonCancelEdit = getElement(Selector.ButtonCancel);
  const buttonUpdate = getElement(Selector.ButtonUpdate);
  const buttonGenerate = getElement(Selector.ButtonGenerate);

  const buttonReset = getElement(Selector.ButtonReset);
  const buttonRace = getElement(Selector.ButtonRace);

  // Events
  buttonGarage.addEventListener("click", renderGarageView);
  buttonWinners.addEventListener("click", renderWinnersView);
  buttonCreate.addEventListener("click", handleCreateCar);
  buttonCancelEdit.addEventListener("click", cancelUpdate);
  buttonUpdate.addEventListener("click", handleUpdate);
  buttonGenerate.addEventListener("click", handleGenerate);
  buttonReset.addEventListener("click", handleReset);
  buttonRace.addEventListener("click", handleRace);
}

// Init pagination
export function initPagination(view: View): void {
  const buttonPrev = getElement(Selector.ButtonPrev);
  const buttonNext = getElement(Selector.ButtonNext);

  if (view === View.Garage) {
    buttonPrev.addEventListener("click", handleGaragePages);
    buttonNext.addEventListener("click", handleGaragePages);
  }

  // if (view === View.Winners) {
  //   buttonPrev.addEventListener("click", handleWinnersPages);
  //   buttonNext.addEventListener("click", handleWinnersPages);
  // }
}
