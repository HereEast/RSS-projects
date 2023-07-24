import { getCarsIds } from "./helpers";
import { startAnimation } from "./handle-start";
// import { DriveResult } from "../../../../types/types";

// Race results
export async function raceCars(ids: string[]): Promise<void> {
  ids.map(async (id) => {
    const result = await startAnimation(id);
    return result;
  });

  // const raceResults = await Promise.all(promises);
  // return raceResults;
}

// Handle race
export async function handleRace(e: Event): Promise<void> {
  e.preventDefault();

  const ids = getCarsIds();
  await raceCars(ids);

  console.log(ids);
  console.log("Race");
}
