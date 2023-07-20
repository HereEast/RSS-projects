import { Selector, CarsData } from "../../../../types/enums";
import { getElement } from "../../../utils/get-element";
import { cleanElement } from "../../../utils/clean-element";
import { createTrack } from "./create-track";

// Render tracks
export function renderTracks(cars: CarsData): void {
  const viewBody = getElement(Selector.ViewBody);
  cleanElement(viewBody);

  const carsArr = [...cars.items];

  carsArr.forEach((car) => {
    const track = createTrack(car);
    track.classList.add(`track--${car.id}`);

    viewBody.append(track);
  });

  console.log(carsArr);
}
