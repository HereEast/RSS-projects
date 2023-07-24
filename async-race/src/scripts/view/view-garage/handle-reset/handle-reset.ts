import { Selector } from "../../../../types/types";
import { getElementsArray } from "../../../utils/get-element";
import { stopCar } from "../handle-drive/handle-drive";

// Handle reset
export function handleReset(e: Event): void {
  e.preventDefault();

  const tracks = [...getElementsArray(Selector.Track)];
  const ids = tracks.map((track) => track.id.split("--").at(-1));

  ids.forEach((id) => stopCar(Number(id)));

  const stopButtons = [...getElementsArray(Selector.ButtonStop)];
  const startButtons = [...getElementsArray(Selector.ButtonStart)];

  stopButtons.forEach((button) => {
    const stopButton = button;
    if (stopButton instanceof HTMLButtonElement) {
      stopButton.disabled = true;
    }
  });

  startButtons.forEach((button) => {
    const startButton = button;
    if (startButton instanceof HTMLButtonElement) {
      startButton.disabled = false;
    }
  });

  console.log("Reset", ids);
}
