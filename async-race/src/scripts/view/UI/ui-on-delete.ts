import { updateTotalCount } from "../../utils/helpers";

export function updateUIOnDelete(track: HTMLElement): void {
  track.remove();
  updateTotalCount(-1);
}
