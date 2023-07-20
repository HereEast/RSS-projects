import { Selector } from "../types/types";
import { getElement } from "./utils/get-element";
import { renderGarageView } from "./view/view-garage/render-garage";
import { renderWinnersView } from "./view/view-winners/render-winners";
import { handleCreateCar } from "./view/view-garage/handlers/handle-create";

// Listeners
export function initListeners(): void {
  const garageButton = getElement(Selector.ButtonGarage);
  const winnersButton = getElement(Selector.ButtonWinners);
  const createButton = getElement(Selector.ButtonCreate);

  // Events
  garageButton.addEventListener("click", renderGarageView);
  winnersButton.addEventListener("click", renderWinnersView);
  createButton.addEventListener("click", handleCreateCar);
}
