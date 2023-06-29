import { Info } from "../../types/enums";

export function handleInput(e: Event): void {
  const input = e.target;

  if (!input) throw Error("Target element is not found...");
  if (!(input instanceof HTMLInputElement)) throw Error("Target is not an HTMLInputElement...");

  if (e.type === "focus") {
    input.classList.remove("blink");
    input.placeholder = "";
  }

  if (e.type === "blur") {
    const isValue = input.value.trim();

    if (!isValue) {
      input.value = "";
      input.placeholder = Info.InputPlaceholder;
      input.classList.add("blink");
    }
  }
}