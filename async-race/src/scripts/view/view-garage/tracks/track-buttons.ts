import { ButtonName, Selector } from "../../../../types/types";
import { createElement, createButton } from "../../../utils/create-element";
// import { handleDelete } from "../handlers/handle-delete";
import { deleteCarAPI } from "../../../api/delete-car";
import { renderGaragePage } from "../render-garage";
import { getTargetID } from "../../../utils/helpers";
import { startUpdate } from "../update/start-update";

// DELETE
export async function handleDelete(e: Event): Promise<void> {
  const id = getTargetID(e);

  await deleteCarAPI(id);
  // deleteTrack(track);

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

  // buttonsNames.forEach((name) => {
  //   const buttonID = `button__${name.toLowerCase()}`;
  //   const button = createElement("button", [Selector.ButtonTrack], name);

  //   button.classList.add(buttonID);
  //   button.id = buttonID;

  //   buttons.push(button);
  // });

  trackButtons.append(startBtn, stopBtn, editBtn, deleteBtn);

  return trackButtons;
}
