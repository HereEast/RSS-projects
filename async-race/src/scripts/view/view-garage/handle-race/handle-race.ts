import { disableAllButtons, getCarsIds } from "./helpers";
import { startAnimation, race } from "./handle-start";
import { Button } from "../../../../types/types";

const buttons = [Button.Race, Button.Start, Button.Stop, Button.Edit, Button.Delete, Button.Create, Button.Generate];

// Race results
export async function raceCars(ids: string[]): Promise<void> {
  const allRaceCars = ids.map(async (id) => {
    const result = await startAnimation(id);
    return result;
  });

  await Promise.all(allRaceCars);
}

// Handle race
export async function handleRace(e: Event): Promise<void> {
  e.preventDefault();

  if (race.isRace) return;
  race.isRace = true;

  disableAllButtons(buttons, true);

  const ids = getCarsIds();
  await raceCars(ids);

  console.log("Race");
}
