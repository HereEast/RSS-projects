import { getTarget } from "../../utils/get-target";
import { getElement } from "../../utils/get-element";
import { Selector } from "../../types/enums";
import { createTooltip } from "./create-tooltip";
import { getElementsArray } from "../../utils/get-element";
import { highlightFromStart, highlightFromEnd } from "./html-highlight";

// Tooltip on hover
export function handleShapesHover(e: MouseEvent): void {
  const target = getTarget(e);
  if (target.classList.contains("playground")) return;

  const HTMLLines = getElementsArray(Selector.HTMLLine);
  const playground = getElement(Selector.Playground);
  const tooltip = createTooltip(target);

  playground.append(tooltip);
  highlightHTMLViaGraphics(target, HTMLLines);

  // Remove tooltip
  target.addEventListener("mouseout", () => {
    tooltip.remove();
    HTMLLines.forEach((line) => line.classList.remove("highlight"));
  });
}

// Highlight HTML line via graphics
function highlightHTMLViaGraphics(target: HTMLElement, lines: HTMLElement[]): void {
  const attr = target.getAttribute("el");
  const targetLine = lines.find((line) => line.getAttribute("el") === attr);

  if (!targetLine) throw Error("HTML line element is not found...");

  const tagName = targetLine.innerText.slice(1, -1);

  if (!tagName.includes("/")) highlightFromStart(targetLine, lines);
  if (tagName.startsWith("/")) highlightFromEnd(targetLine, lines);

  targetLine.classList.add("highlight");
}
