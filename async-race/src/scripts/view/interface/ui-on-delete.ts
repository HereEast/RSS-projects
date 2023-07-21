import { updateTotalCount } from "../../utils/helpers";

export function deleteTrack(track: HTMLElement): void {
  track.remove();
  updateTotalCount(-1);
}
