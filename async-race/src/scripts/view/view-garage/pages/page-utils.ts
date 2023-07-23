import { GARAGE_LIMIT } from "../../../api/constants";
import { getElement } from "../../../utils/get-element";
import { Selector } from "../../../../types/types";

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

// Update pagination
export function updatePagination(page: number): void {
  setCurrentPage(page);
  setTotalPages();
}
