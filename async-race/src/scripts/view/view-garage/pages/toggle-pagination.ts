import { Button, View } from "../../../../types/types";
import { isLastPage, getCurrentPage } from "../../../utils/pagination-helpers";
import { disableButtons } from "../handle-race/helpers";

// Toggle page buttons
export function togglePageButtons(): void {
  disableButtons(Button.Page, false);

  if (getCurrentPage(View.Garage) === 1) {
    disableButtons(Button.Prev, true);
  }

  if (isLastPage(View.Garage)) {
    disableButtons(Button.Next, true);
  }
}
