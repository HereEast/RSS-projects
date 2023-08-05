import { createCarAPI } from "../../../api/cars-api";
import { getRandomColor } from "./random-color";
import { getRandomMake } from "./random-make";
import { updateGarage } from "../render-garage";
import { getCurrentPage, isEnoughSpace } from "../../../utils/pagination-helpers";
import { setTotalPages, togglePageButtons } from "../../pagination/page-utils";
import { updateTotalCount } from "../../../utils/set-total";

const MAX_ADD = 100;

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
    const page = getCurrentPage();
    await updateGarage(page);
  } else {
    updateTotalCount(MAX_ADD);
    setTotalPages();
    togglePageButtons();
  }

  console.log("Generate:", localStorage);
}
