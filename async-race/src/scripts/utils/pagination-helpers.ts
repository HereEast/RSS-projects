import { getElementsArray } from "./get-element";
import { Selector, View } from "../../types/types";
import { GARAGE_LIMIT } from "../api/constants";

// Last track
export function isLastTrack(): boolean {
  const tracks = getElementsArray(Selector.Track);
  return tracks.length === 1;
}

// Current page
export function getCurrentPage(view: View): number {
  const page = localStorage.getItem(`${view}-page`) || 1;
  return Number(page);
}

// First page
export function isFirstPage(view: View): boolean {
  return getCurrentPage(view) === 1;
}

// Last page
export function isLastPage(view: View): boolean {
  // const totalCars = Number(getElement(Selector.CurrentCount).textContent);
  // const totalPages = Math.ceil(totalCars / GARAGE_LIMIT);

  const currentPage = localStorage.getItem(`${view}-page`);
  const totalPages = localStorage.getItem("totalPages");

  // const currentPage = getCurrentPage(view);
  return currentPage === totalPages;
}

// Page full
export function isEnoughSpace(): boolean {
  const tracks = getElementsArray(Selector.Track);
  return tracks.length < GARAGE_LIMIT;
}
