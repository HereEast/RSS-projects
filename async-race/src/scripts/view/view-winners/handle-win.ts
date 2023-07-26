import { race } from "../view-garage/handle-race/animation";
import { showPopup } from "../view-garage/popup/show-popup";
import { saveWinnerAPI, updateWinnerAPI } from "../../api/create-winners";
import { getWinnerAPI } from "../../api/get-winners";
import { Winner } from "../../../types/types";

// Handle winner
export async function handleWinner(id: string, time: number): Promise<void> {
  if (race.winner.id) return;

  const props: Winner = {
    id: Number(id),
    win: 1,
    time: Number(Math.floor(time)),
  };

  const winnerInWinners = await getWinnerAPI(id);

  if (winnerInWinners.id) {
    const bestTime = winnerInWinners.time > time ? winnerInWinners.time : time;
    const winCount = winnerInWinners.win + 1;

    await updateWinnerAPI(id, { win: winCount, time: bestTime });
  } else {
    await saveWinnerAPI(props);
  }

  race.winner.id = id;
  race.winner.time = time;

  showPopup(race.winner);
}
