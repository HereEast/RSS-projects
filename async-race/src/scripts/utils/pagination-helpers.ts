import { getElementsArray } from "./get-element";
import { Selector } from "../../types/types";
import { GARAGE_LIMIT } from "../api/constants";
import { getCurrentView } from "./helpers";

// Last track
export function isLastTrack(): boolean {
  const tracks = getElementsArray(Selector.Track);
  return tracks.length === 1;
}

// Current page
export function getCurrentPage(): number {
  const view = getCurrentView();
  const page = localStorage.getItem(`${view}-page`) || 1;
  return Number(page);
}

// First page
export function isFirstPage(): boolean {
  return getCurrentPage() === 1;
}

// Last page
export function isLastPage(): boolean {
  const view = getCurrentView();
  const currentPage = localStorage.getItem(`${view}-page`);
  const totalPages = localStorage.getItem(`${view}-totalPages`);

  return currentPage === totalPages;
}

// Page full
export function isEnoughSpace(): boolean {
  const tracks = getElementsArray(Selector.Track);
  return tracks.length < GARAGE_LIMIT;
}
