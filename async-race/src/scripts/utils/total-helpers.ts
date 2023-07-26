import { getElement } from "./get-element";
import { Selector, View } from "../../types/types";

// Set total count
export function setTotalCount(view: View, count: number | string): void {
  const countElement = getElement(Selector.CurrentCount);
  countElement.textContent = String(count);

  if (view === View.Garage) {
    localStorage.setItem("totalCars", String(count));
  } else {
    localStorage.setItem("totalWinners", String(count));
  }
}

// Update count
export function updateTotalCars(number: number): void {
  const countElement = getElement(Selector.CurrentCount);
  const newCount = `${Number(countElement.textContent) + number}`;

  countElement.textContent = newCount;
  localStorage.setItem("totalCars", newCount);
}

// Get total count
export function getTotalCars(): number {
  const totalCount = localStorage.getItem("totalCount") || 1;
  return Number(totalCount);
}
