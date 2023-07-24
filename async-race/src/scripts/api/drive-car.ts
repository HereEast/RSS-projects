import { ENGINE_URL } from "./constants";
import { StartData, DriveResponse } from "../../types/types";

// Start car
export async function startCarAPI(id: number): Promise<StartData> {
  const res = await fetch(`${ENGINE_URL}?id=${id}&status=started`, {
    method: "PATCH",
  });

  const data = await res.json();
  return data;
}

// Stop car
export async function stopCarAPI(id: number): Promise<StartData> {
  const res = await fetch(`${ENGINE_URL}?id=${id}&status=stopped`, {
    method: "PATCH",
  });

  const data = await res.json();
  return data;
}

// Drive car
export async function driveCarAPI(id: number): Promise<DriveResponse> {
  const res = await fetch(`${ENGINE_URL}?id=${id}&status=drive`, {
    method: "PATCH",
  });

  if (res.status !== 200) {
    return { success: false };
  }

  return { ...(await res.json()) };
}
