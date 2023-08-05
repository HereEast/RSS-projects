import { saveCurrentView, getCurrentView } from "../../utils/helpers";
import { toggleUIElements } from "../toggle/toggle-elements";
import { View, SortParams } from "../../../types/types";
import { getCurrentPage } from "../../utils/pagination-helpers";
import { getWinnersAPI } from "../../api/winners-api";
import { renderWinnersTable } from "./table/render-table";
import { setTotalCount } from "../../utils/set-total";
import { getCurrentSort, getSortOrder } from "./sort/sort-params";
import { setPagination } from "../pagination/page-utils";

//
// Update winners
//
export async function updateWinners(sortParams: SortParams): Promise<void> {
  const { cars: winners, count } = await getWinnersAPI(sortParams);

  await renderWinnersTable(winners);
  setTotalCount(count);

  const page = Number(sortParams.page);
  setPagination(page);

  console.log(localStorage);
}

//
// Render
//
export async function renderWinnersView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Winners) return;

  saveCurrentView(View.Winners);
  toggleUIElements(View.Winners);

  const page = getCurrentPage();
  const currentSort = getCurrentSort();
  const { sort, order } = getSortOrder(currentSort);

  await updateWinners({ page, sort, order });

  console.log("🙂 Winner View");
}
