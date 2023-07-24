import { getTargetID } from "../../../utils/get-target-id";
import { driveCarAPI, stopCarAPI } from "../../../api/drive-car";
import { getElement } from "../../../utils/get-element";
import { Selector, DriveResult } from "../../../../types/types";
import { getDriveTime, getDistance, toggleControls } from "./helpers";
// import { showPopup } from "../popup/show-popup";

let requestId: number;
let winner: DriveResult = {
  id: "",
  time: 0,
};

// Handle drive
export async function controlDrive(id: string, time: number): Promise<boolean> {
  const { success } = await driveCarAPI(Number(id));

  if (success) {
    if (!winner.id) {
      // Set winner
      winner = { id, time };
      // showPopup(winner);
      console.log("WINNER", winner);
    }
  } else {
    cancelAnimationFrame(requestId);
  }

  return success;
}

// Start animation
export async function startAnimation(id: string): Promise<void> {
  const car = getElement(`#car--${id}`);

  const time = await getDriveTime(id);
  const dist = getDistance() - 40;
  const frameCount = (time / 1000) * 60;

  let startX = car.offsetLeft;
  const step = (dist - startX) / frameCount;

  function animate(): void {
    startX += step;
    car.style.transform = `translate(${startX}px)`;

    if (startX <= dist) {
      requestId = requestAnimationFrame(animate);
    }
  }

  animate();
  await controlDrive(id, time);
}

// Handle Start
export async function handleStart(e: Event): Promise<void> {
  const id = getTargetID(e);
  const car = getElement(`#car--${id}`);

  const isCarDriving = car.classList.contains(Selector.CarDriving.slice(1));
  if (isCarDriving) return;

  car.classList.add(Selector.CarDriving.slice(1));

  startAnimation(id);
  toggleControls(e);
}

// Stop car
export async function stopCar(id: number): Promise<void> {
  cancelAnimationFrame(requestId);

  const car = getElement(`#car--${id}`);
  car.style.transform = "translate(0px)";

  await stopCarAPI(id);
  car.classList.remove(Selector.CarDriving.slice(1));
}

// Handle Stop
export async function handleStop(e: Event): Promise<void> {
  const id = Number(getTargetID(e));

  stopCar(id);
  toggleControls(e);
}
