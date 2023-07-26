import { getTarget } from "../../../utils/get-element";
import { Selector } from "../../../../types/types";
import { isLastPage, isFirstPage, getCurrentPage } from "../../../utils/pagination-helpers";
import { getSortOrder, getCurrentSort } from "../sort-params";
import { updateWinners } from "../render-winners";

// Winners pagination
export async function handleWinnersPages(e: Event): Promise<void> {
  const target = getTarget(e);

  const isNextButton = target.id === Selector.ButtonNext.slice(1);
  const isPrevButton = target.id === Selector.ButtonPrev.slice(1);

  if ((isNextButton && isLastPage()) || (isPrevButton && isFirstPage())) return;

  const currentPage = getCurrentPage();
  const newPage = isNextButton ? currentPage + 1 : currentPage - 1;

  const currentSort = getCurrentSort();
  const { sort, order } = getSortOrder(currentSort);

  await updateWinners({ page: newPage, sort, order });
}
