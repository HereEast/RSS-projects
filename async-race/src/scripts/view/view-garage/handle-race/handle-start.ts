import { getTargetID } from "../../../utils/helpers";
import { driveCarAPI, stopCarAPI } from "../../../api/drive-car";
import { getElement } from "../../../utils/get-element";
import { Selector, RaceData } from "../../../../types/types";
import { getDriveTime, getDistance, toggleControls } from "./helpers";
import { handleWinner } from "./handle-win";

export interface Animation {
  id: number;
}

export const animation = {
  id: 0,
};

export const race: RaceData = {
  winner: {
    id: "",
    time: 0,
  },
  isRace: false,
};

// Handle drive
export async function controlDrive(id: string, time: number): Promise<boolean> {
  const { success } = await driveCarAPI(Number(id));

  if (success) {
    console.log("Finish!", id, time);
  } else {
    cancelAnimationFrame(animation.id);
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
      animation.id = requestAnimationFrame(animate);
    }

    if (startX >= dist) {
      if (!race.winner.id && race.isRace) {
        handleWinner(id, time);
        console.log(car, race.winner);
      }

      race.isRace = false;
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
  cancelAnimationFrame(animation.id);

  const car = getElement(`#car--${id}`);
  car.style.transform = "translate(0px)";

  await stopCarAPI(id);
  car.classList.remove(Selector.CarDriving.slice(1));
}

// Handle Stop
export async function handleStop(e: Event): Promise<void> {
  const id = Number(getTargetID(e));

  await stopCar(id);
  toggleControls(e);
}
