import { getElement } from "../utils/get-element";
import { Selector, CarsData } from "../../types/enums";

// Total count
export function setCarsCount(cars: CarsData): void {
  const countElement = getElement(Selector.CurrentCount);
  countElement.textContent = cars.count;
}
