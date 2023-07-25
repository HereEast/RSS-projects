import { animation } from "./handle-start";
import { disableButtons } from "./helpers";
import { cleanWinner } from "./handle-win";
import { Button, View } from "../../../../types/types";
import { getCurrentPage } from "../../../utils/pagination-helpers";
import { updateGarage } from "../render-garage";

// Handle reset
export async function handleReset(e: Event): Promise<void> {
  e.preventDefault();

  cleanWinner();
  cancelAnimationFrame(animation.id);

  const page = getCurrentPage(View.Garage);
  await updateGarage(page);

  disableButtons(Button.Race, false);

  console.log("Reset");
}
