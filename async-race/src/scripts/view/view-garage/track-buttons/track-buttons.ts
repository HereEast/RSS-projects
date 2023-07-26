import { Button, Selector } from "../../../../types/types";
import { createElement, createButton } from "../../../utils/create-element";
import { deleteCarAPI } from "../../../api/create-car";
import { updateGarage } from "../render-garage";
import { getTargetID } from "../../../utils/helpers";
import { startUpdate } from "../handle-update/start-update";
import { getCurrentPage, isLastTrack } from "../../../utils/pagination-helpers";
import { handleStart, handleStop } from "../handle-race/handle-race";
import { hideUpdateForm } from "../handle-update/handle-form";
import { deleteWinnerAPI } from "../../../api/create-winners";

// Delete
export async function handleDelete(e: Event): Promise<void> {
  if (getCurrentPage() === 1 && isLastTrack()) return;

  const id = getTargetID(e);

  await deleteCarAPI(id);
  await deleteWinnerAPI(id);

  const currentPage = getCurrentPage();
  const page = isLastTrack() ? currentPage - 1 : currentPage;
  await updateGarage(page);

  hideUpdateForm(e);
  console.log("Delete:", localStorage);
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
  startBtn.addEventListener("click", handleStart);
  stopBtn.addEventListener("click", handleStop);

  stopBtn.disabled = true;

  trackButtons.append(startBtn, stopBtn, editBtn, deleteBtn);
  return trackButtons;
}
