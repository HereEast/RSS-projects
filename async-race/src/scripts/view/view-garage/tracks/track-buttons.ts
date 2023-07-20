import { ButtonName, Selector } from "../../../../types/enums";
import { createElement } from "../../../utils/create-element";

// Track buttons
export function createTrackButtons(): HTMLElement {
  const trackButtons = createElement("div", [Selector.TrackButtons]);

  const buttonsNames = [ButtonName.Start, ButtonName.Stop, ButtonName.Edit, ButtonName.Delete];

  buttonsNames.forEach((name) => {
    const buttonClass = `.button__${name.toLowerCase()}`;
    const button = createElement("button", [Selector.ButtonTrack, buttonClass], name);
    trackButtons.append(button);
  });

  return trackButtons;
}
