import { getElement } from "./get-element";
import { Selector, CarsData } from "../../types/types";

// Total count
export function setTotalCount(cars: CarsData): void {
  const countElement = getElement(Selector.CurrentCount);
  countElement.textContent = cars.count;

  localStorage.setItem("totalCars", cars.count);
}

// Update count
export function updateTotalCount(value: number): void {
  const countElement = getElement(Selector.CurrentCount);
  const currentCount = Number(countElement.textContent);

  countElement.textContent = `${currentCount + value}`;
}
