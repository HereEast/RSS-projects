import { Selector } from "../../../../types/types";
import { getElement } from "../../../utils/get-element";
import { createCarAPI } from "../../../api/create-car";
import { updateTotalCount, isLastPage, isEnoughSpace } from "../../../utils/helpers";
import { appendTrack } from "../tracks/append-track";

// Handle create
export async function handleCreateCar(e: Event): Promise<void> {
  e.preventDefault();

  const inputText = getElement(`${Selector.FormCreate} .input-text`);
  const inputColor = getElement(`${Selector.FormCreate} .input-color`);

  if (!(inputText instanceof HTMLInputElement)) {
    throw Error("Text input isn't found.");
  }

  if (!(inputColor instanceof HTMLInputElement)) {
    throw Error("Color input isn't found.");
  }

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
