import { createCarAPI } from "../../../api/create-car";
import { getRandomColor } from "./random-color";
import { getRandomMake } from "./random-make";
import { updateGarage } from "../render-garage";
import { isEnoughSpace } from "../../../utils/check-last-page";
import { updateTotalCount } from "../../../utils/total-count";

const MAX_ADD = 2;

// Generate 100 cars
export async function generateCars(n: number): Promise<void> {
  if (n > 0) {
    const name = getRandomMake();
    const color = getRandomColor();

    await createCarAPI({ name, color });
    await generateCars(n - 1);
  }
}

// Handle generate
export async function handleGenerate(e: Event): Promise<void> {
  e.preventDefault();

  await generateCars(MAX_ADD);

  if (isEnoughSpace()) {
    updateGarage(1);
  } else {
    updateTotalCount(MAX_ADD);
  }
}
