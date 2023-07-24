import { getTargetID } from "../../../utils/get-target-id";
import { driveCarAPI, stopCarAPI } from "../../../api/drive-car";
import { getElement } from "../../../utils/get-element";
import { Selector } from "../../../../types/types";
import { getDriveTime, getDistance, toggleControls } from "./helpers";

let requestId: number;

// Handle drive
export async function controlDrive(id: string): Promise<void> {
  const { success } = await driveCarAPI(Number(id));

  if (success) {
    console.log("🏁 Finish!");
  } else {
    cancelAnimationFrame(requestId);
  }
}

// Start animation
export async function startAnimation(id: string, car: HTMLElement): Promise<void> {
  const targetCar: HTMLElement = car;

  const time = await getDriveTime(id);
  const dist = getDistance() - 40;
  const frameCount = (time / 1000) * 60;

  let startX = car.offsetLeft;
  const step = (dist - startX) / frameCount;

  function animate(): void {
    startX += step;
    targetCar.style.transform = `translate(${startX}px)`;

    if (startX <= dist) {
      requestId = requestAnimationFrame(animate);
    }
  }

  animate();
  controlDrive(id);
}

// Start
export async function handleStart(e: Event): Promise<void> {
  const id = getTargetID(e);
  const car = getElement(`#car--${id}`);

  const isCarDriving = car.classList.contains(Selector.CarDriving.slice(1));
  if (isCarDriving) return;

  car.classList.add(Selector.CarDriving.slice(1));

  startAnimation(id, car);
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

// Handle stop
export async function handleStop(e: Event): Promise<void> {
  const id = Number(getTargetID(e));

  stopCar(id);
  toggleControls(e);
}
