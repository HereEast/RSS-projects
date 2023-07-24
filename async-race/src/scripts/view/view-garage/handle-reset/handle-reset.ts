import { stopCar } from "../handle-start/handle-start";
import { getCarsIds, disableStartButtons, disableStopButtons } from "../handle-start/helpers";

// Handle reset
export function handleReset(e: Event): void {
  e.preventDefault();

  const ids = getCarsIds();
  ids.forEach((id) => stopCar(Number(id)));

  disableStartButtons(false);
  disableStopButtons(true);

  console.log("Reset");
}
