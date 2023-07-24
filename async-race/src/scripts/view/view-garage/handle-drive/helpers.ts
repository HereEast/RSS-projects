import { startCarAPI } from "../../../api/drive-car";
import { Selector } from "../../../../types/types";
import { getTarget } from "../../../utils/get-element";
import { toggleDisable } from "../../../utils/helpers";

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
