import { ButtonName, Selector, Callback } from "../../../../types/types";
import { createElement } from "../../../utils/create-element";
import { handleDelete } from "../handlers/handle-delete";

// Button
export function createButton(name: ButtonName, callback: Callback): HTMLElement {
  const button = createElement("button", [Selector.ButtonTrack], name);
  const buttonID = `button__${name.toLowerCase()}`;

  button.classList.add(buttonID);
  button.id = buttonID;

  button.addEventListener("click", callback);

  return button;
}

// Buttons
export function createTrackButtons(): HTMLElement {
  const trackButtons = createElement("div", [Selector.TrackButtons]);

  const startBtn = createButton(ButtonName.Start, (e) => console.log(e.target));
  const stopBtn = createButton(ButtonName.Stop, (e) => console.log(e.target));
  const editBtn = createButton(ButtonName.Edit, (e) => console.log(e.target));
  const deleteBtn = createButton(ButtonName.Delete, handleDelete);

  // buttonsNames.forEach((name) => {
  //   const buttonID = `button__${name.toLowerCase()}`;
  //   const button = createElement("button", [Selector.ButtonTrack], name);

  //   button.classList.add(buttonID);
  //   button.id = buttonID;

  //   trackButtons.append(button);
  // });
  trackButtons.append(startBtn, stopBtn, editBtn, deleteBtn);

  return trackButtons;
}
