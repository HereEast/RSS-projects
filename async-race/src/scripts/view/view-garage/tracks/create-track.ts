import { createElement, createSVG } from "../../../utils/create-element";
import { Selector, Car } from "../../../../types/types";
import { createTrackButtons } from "./track-buttons";

const NS = "http://www.w3.org/2000/svg";
const CAR_SIZE = "40px";

// Track header
export function createTrackHeader(car: Car): HTMLElement {
  const trackHeader = createElement("div", [Selector.TrackHeader]);
  const buttons = createTrackButtons();
  const carName = createElement("span", [Selector.CarName], car.name);

  trackHeader.append(buttons, carName);

  return trackHeader;
}

// Track body
export function createTrackBody(car: Car): HTMLElement {
  const trackBody = createElement("div", [Selector.TrackBody]);

  const carProps = {
    divClass: Selector.Car,
    ns: NS,
    width: CAR_SIZE,
    height: CAR_SIZE,
    color: car.color,
  };

  const carElement = createSVG(carProps);
  carElement.id = `car--${car.id}`;

  const finishElement = createElement("div", [Selector.Flag]);

  trackBody.append(carElement, finishElement);
  return trackBody;
}

// Create track
export function createTrack(car: Car): HTMLElement {
  const track = createElement("div", [Selector.Track]);
  track.id = `track--${car.id}`;

  const trackContainer = createElement("div", [Selector.TrackContainer]);
  const trackHeader = createTrackHeader(car);
  const trackBody = createTrackBody(car);

  trackContainer.append(trackHeader, trackBody);
  track.append(trackContainer);

  return track;
}
