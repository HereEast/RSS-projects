import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";
import { getTarget } from "../../utils/get-target";
import { highlightFromStart, highlightFromEnd } from "./html-highlight";
import { getElement } from "../../utils/get-element";
import { createTooltip } from "./create-tooltip";

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
  highlightGraphicsViaHTML(target);
}

// Graphics
function highlightGraphicsViaHTML(target: HTMLElement): void {
  const attr = target.getAttribute("el");
  const playground = getElement(Selector.Playground);

  const tags = [...document.querySelectorAll(`[el="${attr}"]`)] as HTMLEmbedElement[];
  const element = tags.find((tag) => tag.closest(Selector.Playground));

  if (!element) throw Error("Graphic target element isn't found...");

  const tooltip = createTooltip(element);
  playground.append(tooltip);

  target.addEventListener("mouseout", () => {
    tooltip.remove();
  });
}

// Remove hover
export function removeHTMLHighlights(): void {
  const lines = getElementsArray(Selector.HTMLLine);
  lines.forEach((line) => line.classList.remove("highlight"));
}
