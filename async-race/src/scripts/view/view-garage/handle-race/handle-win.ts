import { race } from "./handle-start";
import { showPopup } from "../popup/show-popup";

// Clean winner
export function cleanWinner(): void {
  race.winner.id = "";
  race.winner.time = 0;
  race.isRace = false;
}

// Handle winner
export function handleWinner(id: string, time: number): void {
  cleanWinner();

  if (race.winner.id) return;

  race.winner.id = id;
  race.winner.time = time;

  showPopup(race.winner);
}
