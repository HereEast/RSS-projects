import { Info } from "../../types/enums";

// Handle input
export function handleInputFocus(e: Event): void {
  const input = e.target;

  if (!input) throw Error("Target element is not found...");
  if (!(input instanceof HTMLInputElement)) throw Error("Target is not an HTMLInputElement...");

  if (e.type === "focus") {
    input.placeholder = "";
    input.classList.add("active");
  }

  if (e.type === "blur") {
    const isValue = input.value.trim();

    if (!isValue) {
      input.value = "";
      input.placeholder = Info.InputPlaceholder;
      input.classList.remove("active");
    }
  }
}
