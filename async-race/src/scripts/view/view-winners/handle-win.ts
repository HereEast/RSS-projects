import { race } from "../view-garage/handle-race/animation";
import { showPopup } from "../view-garage/popup/show-popup";
import { saveWinnerAPI } from "../../api/winners";
import { Winner } from "../../../types/types";

// Clean winner
export function cleanWinner(): void {
  race.winner.id = "";
  race.winner.time = 0;
  race.isRace = false;
}

// Handle winner
export async function handleWinner(id: string, time: number): Promise<void> {
  if (race.winner.id) return;

  const props: Winner = {
    id: Number(id),
    win: 1,
    time: Number(time),
  };

  await saveWinnerAPI(props);

  race.winner.id = id;
  race.winner.time = time;

  showPopup(race.winner);
}
