import { ButtonName, Selector } from "../../../../types/types";
import { createElement, createButton } from "../../../utils/create-element";
import { deleteCarAPI } from "../../../api/delete-car";
import { renderGaragePage } from "../render-garage";
import { getEditCarData, getTargetID } from "../../../utils/helpers";
import { startUpdate } from "../update/start-update";
import { hideUpdateForm } from "../update/show-update-form";

// DELETE
export async function handleDelete(e: Event): Promise<void> {
  const id = getTargetID(e);

  await deleteCarAPI(id);

  if (Number(id) === getEditCarData().id) {
    hideUpdateForm();
  }

  const currentPage = 1;
  renderGaragePage(currentPage);
}

// BUTTONS
export function createTrackButtons(): HTMLElement {
  const trackButtons = createElement("div", [Selector.TrackButtons]);

  const startBtn = createButton(ButtonName.Start, (e) => console.log(e.target));
  const stopBtn = createButton(ButtonName.Stop, (e) => console.log(e.target));
  const editBtn = createButton(ButtonName.Edit, startUpdate);
  const deleteBtn = createButton(ButtonName.Delete, handleDelete);

  trackButtons.append(startBtn, stopBtn, editBtn, deleteBtn);

  return trackButtons;
}
