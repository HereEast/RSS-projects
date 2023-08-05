import { startCarAPI } from "../../../api/drive-api";
import { Selector, Button } from "../../../../types/types";
import { getTarget, getElementsArray } from "../../../utils/get-element";
import { toggleDisable } from "../../../utils/helpers";
import { race } from "./animation";

// Clean winner
export function cleanWinner(): void {
  race.winner.id = "";
  race.winner.time = 0;
  race.isRace = false;
}

// Move to start
export function moveToStart(): void {
  const cars = [...getElementsArray(Selector.Car)];

  cars.forEach((carEl) => {
    const car = carEl;
    car.style.transform = "translate(0px)";
  });
}

// Get drive time
export async function getDriveTime(id: string): Promise<number> {
  const startData = await startCarAPI(Number(id));
  const time = startData.distance / startData.velocity;

  return time;
}

// Get distance
export function getDistance(): number {
  const windowWidth = document.body.clientWidth;
  const padding = windowWidth > 550 ? 20 * 2 : 15 * 2;
  return windowWidth - padding;
}

// Get start button
export function getSiblingButton(button: HTMLElement): HTMLButtonElement {
  const isStopButton = button.classList.contains(Selector.ButtonStop.slice(1));
  const sibling = isStopButton ? button.previousElementSibling : button.nextElementSibling;

  if (!(sibling instanceof HTMLButtonElement)) {
    throw Error("Couldn't find a sibling button...");
  }

  return sibling;
}

// Toggle controls
export function toggleControls(e: Event): void {
  const targetButton = getTarget(e);
  const siblingButton = getSiblingButton(targetButton);

  toggleDisable(targetButton);
  toggleDisable(siblingButton);
}

// Get all ids
export function getCarsIds(): string[] {
  const tracks = [...getElementsArray(Selector.Track)];
  const ids = tracks.map((track) => {
    const id = track.id.split("--").at(-1);
    return id || "";
  });

  if (!ids.length) {
    throw Error("Can't get current cars' ids.");
  }

  return ids;
}

// Disable buttons
export function disableButton(buttonName: Button | string, state: boolean): void {
  const buttons = [...getElementsArray(`.button__${buttonName}`)];

  buttons.forEach((btn) => {
    const button = btn;

    if (button instanceof HTMLButtonElement) {
      button.disabled = state;
    }
  });
}

// Disable all
export function disableButtons(buttons: Button[], state: boolean): void {
  buttons.forEach((button) => {
    disableButton(button, state);
  });
}
