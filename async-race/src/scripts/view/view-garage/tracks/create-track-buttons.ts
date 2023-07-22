import { Button, Selector } from "../../../../types/types";
import { createElement, createButton } from "../../../utils/create-element";
import { deleteCarAPI } from "../../../api/delete-car";
import { updateGarage } from "../render-garage";
import { getTargetID } from "../../../utils/get-target-id";
import { startUpdate } from "../handle-update/start-update";

// Delete
export async function handleDelete(e: Event): Promise<void> {
  const id = getTargetID(e);

  await deleteCarAPI(id);

  const currentPage = 1;
  updateGarage(currentPage);
}

// Buttons
export function createTrackButtons(): HTMLElement {
  const trackButtons = createElement("div", [Selector.TrackButtons]);

  const startBtn = createButton(Button.Start, [Selector.ButtonTrack, Selector.ButtonStart]);
  const stopBtn = createButton(Button.Stop, [Selector.ButtonTrack, Selector.ButtonStop]);
  const editBtn = createButton(Button.Edit, [Selector.ButtonTrack, Selector.ButtonEdit]);
  const deleteBtn = createButton(Button.Delete, [Selector.ButtonTrack, Selector.ButtonDelete]);

  editBtn.addEventListener("click", startUpdate);
  deleteBtn.addEventListener("click", handleDelete);

  trackButtons.append(startBtn, stopBtn, editBtn, deleteBtn);

  return trackButtons;
}
