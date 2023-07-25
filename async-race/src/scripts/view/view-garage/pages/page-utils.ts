import { GARAGE_LIMIT } from "../../../api/constants";
import { getElement } from "../../../utils/get-element";
import { Selector, View, Button } from "../../../../types/types";
import { isLastPage, getCurrentPage } from "../../../utils/pagination-helpers";
import { disableButton } from "../handle-race/helpers";

// Get total pages
export function getTotalPages(): number {
  const totalCars = Number(localStorage.getItem("totalCars"));
  const totalPages = Math.ceil(totalCars / GARAGE_LIMIT);

  return totalPages;
}

// Set total pages
export function setTotalPages(): void {
  const totalPagesElement = getElement(Selector.TotalPages);
  const totalPages = String(getTotalPages());

  totalPagesElement.textContent = totalPages;
  localStorage.setItem("totalPages", totalPages);
}

// Save page
export function setCurrentPage(page: number): void {
  const pageElement = getElement(Selector.CurrentPage);
  const newPage = page || 1;

  pageElement.textContent = String(newPage);
  localStorage.setItem("garage-page", String(newPage));
}

// Toggle page buttons
export function togglePageButtons(): void {
  disableButton(Button.Page, false);

  if (getCurrentPage(View.Garage) === 1) {
    disableButton(Button.Prev, true);
  }

  if (isLastPage(View.Garage)) {
    disableButton(Button.Next, true);
  }
}

// Update pagination
export function setPagination(page: number): void {
  setCurrentPage(page);
  setTotalPages();
  togglePageButtons();
}
