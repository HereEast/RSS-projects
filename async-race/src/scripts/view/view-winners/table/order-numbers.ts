import { Selector } from "../../../../types/types";
import { getElementsArray } from "../../../utils/get-element";
import { getCurrentPage } from "../../../utils/pagination-helpers";

// Get number
export function getNum(index: number): number {
  const currentPage = getCurrentPage();
  const num = (currentPage - 1) * 10 + 1 + index;

  return num;
}

// Order rows
export function orderRows(): void {
  function setNumbers(): void {
    const numberSpans = getElementsArray(`${Selector.RowsContainer} ${Selector.RowNumber}`);
    const currentPage = getCurrentPage();

    numberSpans.forEach((item, i) => {
      const span = item;
      const num = (currentPage - 1) * 10 + 1 + i;
      span.textContent = `${num}`;
    });
  }

  setTimeout(setNumbers, 100);
}
