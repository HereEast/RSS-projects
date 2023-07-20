import { getElement, getElementsArray } from "./get-element";
import { Selector, CarsData } from "../../types/types";
import { GARAGE_LIMIT } from "../api/constants";

// Last page
export function isLastPage(): boolean {
  const totalCars = Number(getElement(Selector.CurrentCount).textContent);
  const totalPages = Math.ceil(totalCars / GARAGE_LIMIT);
  // Change get current page function
  const currentPage = 1;

  return currentPage === totalPages;
}

// Page full
export function isEnoughSpace(): boolean {
  const tracks = getElementsArray(Selector.Track);
  return tracks.length < GARAGE_LIMIT;
}

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
