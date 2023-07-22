import { Selector } from "../../../../types/types";
import { getFormInputs } from "../../../utils/get-element";
import { createCarAPI } from "../../../api/create-car";
import { isLastPage, isEnoughSpace } from "../../../utils/check-last-page";
import { updateTotalCount } from "../../../utils/total-count";
import { appendTrack } from "../tracks/append-track";

// Handle create
export async function handleCreateCar(e: Event): Promise<void> {
  e.preventDefault();

  const { inputText, inputColor } = getFormInputs(Selector.FormCreate);

  const name = inputText.value;
  const color = inputColor.value;

  if (!name) {
    inputText.focus();
    return;
  }

  const newCar = await createCarAPI({ name, color });

  if (isLastPage() && isEnoughSpace()) {
    appendTrack(newCar);
  }

  updateTotalCount(1);
  inputText.value = "";
}
