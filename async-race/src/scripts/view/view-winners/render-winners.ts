import { saveCurrentView, getCurrentView } from "../../utils/helpers";
import { toggleUIElements } from "../toggle/toggle-elements";
import { View, SortParams } from "../../../types/types";
import { getCurrentPage } from "../../utils/pagination-helpers";
import { getWinnersAPI } from "../../api/get-winners";
import { renderWinnersTable } from "./render-table";
import { setTotalCount } from "../../utils/set-total";
import { initPagination } from "../../listeners";
import { getCurrentSort, getSortOrder } from "./sort-params";
import { setPagination } from "../view-garage/pages/page-utils";

//
// Update winners
//
export async function updateWinners(sortParams: SortParams): Promise<void> {
  const { cars: winners, count } = await getWinnersAPI(sortParams);

  await renderWinnersTable(winners);

  setTotalCount(count);

  const page = Number(sortParams.page);
  setPagination(page);
}

//
// Render
//
export async function renderWinnersView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Winners) return;

  saveCurrentView(View.Winners);
  toggleUIElements(View.Winners);
  initPagination(View.Winners);

  const page = getCurrentPage();
  const currentSort = getCurrentSort();
  const { sort, order } = getSortOrder(currentSort);

  await updateWinners({ page, sort, order });

  console.log("🙂 Winner View");
}
