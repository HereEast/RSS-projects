import { Selector, View } from "../../../../types/types";
import { getTarget } from "../../../utils/get-element";
import { getCurrentPage, isFirstPage, isLastPage } from "../../../utils/pagination-helpers";
import { updateGarage } from "../render-garage";
import { race } from "../handle-race/animation";
// import { handleReset } from "../handle-race/handle-race";

// Handle pagination
export async function handlePagination(e: Event): Promise<void> {
  const target = getTarget(e);

  const isNextButton = target.id === Selector.ButtonNext.slice(1);
  const isPrevButton = target.id === Selector.ButtonPrev.slice(1);

  if (isNextButton && isLastPage(View.Garage)) {
    console.log("Last page");
    return;
  }

  if (isPrevButton && isFirstPage(View.Garage)) {
    console.log("First page");
    return;
  }

  const currentPage = getCurrentPage(View.Garage);
  const newPage = isNextButton ? currentPage + 1 : currentPage - 1;

  await updateGarage(newPage);
  // await handleReset(e);

  console.log("Is race:", race);
}
