import { carMakes } from "./car-makes";
import { getRandomIndex } from "../../../utils/helpers";

// Random make
export function getRandomMake(): string {
  const carIdx = getRandomIndex(carMakes);
  const { make, models } = carMakes[carIdx];

  const modelIdx = getRandomIndex(models);
  const model = models[modelIdx];

  return `${make} ${model}`;
}
