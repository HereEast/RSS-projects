import { getTargetID } from "../../../utils/helpers";
import { stopCarAPI } from "../../../api/drive-car";
import { getElement } from "../../../utils/get-element";
import { toggleControls, disableButtons, getCarsIds, moveToStart } from "./helpers";
import { cleanWinner } from "../../view-winners/handle-win";
import { startAnimation, animation, race } from "./animation";
import { Button, Selector, View } from "../../../../types/types";
import { getCurrentPage } from "../../../utils/pagination-helpers";
import { updateGarage } from "../render-garage";
import { togglePageButtons } from "../pages/page-utils";
import { hidePopup } from "../popup/show-popup";

export const someCar = {
  isMoving: false,
};

//
// HANDLE START
//
export async function handleStart(e: Event): Promise<void> {
  const id = getTargetID(e);
  const car = getElement(`#car--${id}`);

  const isCarDriving = car.classList.contains(Selector.CarDriving.slice(1));
  if (isCarDriving) return;

  car.classList.add(Selector.CarDriving.slice(1));
  someCar.isMoving = true;

  startAnimation(id);
  toggleControls(e);
}

//
// STOP
//
export async function stopCar(id: number): Promise<void> {
  const car = getElement(`#car--${id}`);
  car.style.transform = "translate(0px)";

  await stopCarAPI(id);
  car.classList.remove(Selector.CarDriving.slice(1));
}

//
// HANDLE STOP
//
export async function handleStop(e: Event): Promise<void> {
  const id = Number(getTargetID(e));

  someCar.isMoving = false;

  cancelAnimationFrame(animation.id);
  await stopCar(id);

  toggleControls(e);
}

//
// HANDLE RESET
//
export async function handleReset(e: Event): Promise<void> {
  e.preventDefault();

  cleanWinner();
  moveToStart();
  cancelAnimationFrame(animation.id);

  const buttons = [Button.Race, Button.Create, Button.Generate];
  disableButtons(buttons, false);

  const page = getCurrentPage(View.Garage);
  await updateGarage(page);

  console.log("Reset");
}

//
// RACE
//
export async function handleRace(e: Event): Promise<void> {
  e.preventDefault();

  cleanWinner();
  moveToStart();
  cancelAnimationFrame(animation.id);

  race.isRace = true;

  const buttons = [Button.Race, Button.Start, Button.Edit, Button.Delete, Button.Page, Button.Create, Button.Generate];

  disableButtons(buttons, true);

  const ids = getCarsIds();

  const allRaceCars = ids.map(async (id) => {
    const result = await startAnimation(id);
    return result;
  });

  await Promise.all(allRaceCars);

  hidePopup();
  disableButtons(buttons, false);
  togglePageButtons();

  race.isRace = false;

  console.log("Race", race.isRace);
}