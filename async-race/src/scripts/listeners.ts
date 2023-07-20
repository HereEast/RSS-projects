import { Selector } from "../types/enums";
import { getElement } from "./utils/get-element";
import { renderGarageView } from "./view/view-garage/render-garage";
import { renderWinnersView } from "./view/view-winners/render-winners";

// Listeners
export function initListeners(): void {
  const garageButton = getElement(Selector.ButtonGarage);
  const winnersButton = getElement(Selector.ButtonWinners);

  // Events
  garageButton.addEventListener("click", renderGarageView);
  winnersButton.addEventListener("click", renderWinnersView);
}
