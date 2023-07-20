import { createElement } from "./create-element";

export function createLink(text: string, url: string, classes?: string[]): HTMLAnchorElement {
  const link = createElement("a", classes, text);

  if (!(link instanceof HTMLAnchorElement)) {
    throw Error("Failed to create a <a> element...");
  }

  link.href = url;

  return link;
}
