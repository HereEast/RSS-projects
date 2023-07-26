import { SortOptions, OrderOptions } from "../../../../types/types";

// Get
export function getSortOrder(sortOption: SortOptions): { sort: SortOptions; order: OrderOptions } {
  const order = localStorage.getItem(`sort--${sortOption}`) || "DESC";

  return { sort: sortOption, order };
}

// Save
export function saveSortOption(sortOption: SortOptions, sortOrder: OrderOptions): void {
  localStorage.setItem(`sort--${sortOption}`, sortOrder);
}
