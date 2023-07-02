import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";
import { getTarget } from "../../utils/get-target";
import { highlightFromStart, highlightFromEnd } from "./html-highlight";

// HTML Hover
export function handleHTMLHover(e: MouseEvent): void {
  const target = getTarget(e);

  if (target.textContent?.includes("div")) return;

  const lines = getElementsArray(Selector.HTMLLine);
  lines.forEach((line) => line.classList.remove("highlight"));

  const tagName = target.innerText.slice(1, -1);

  if (!tagName.includes("/")) highlightFromStart(target, lines);
  if (tagName.startsWith("/")) highlightFromEnd(target, lines);

  target.classList.add("highlight");
}
