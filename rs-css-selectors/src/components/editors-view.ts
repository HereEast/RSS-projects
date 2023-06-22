import { createElement } from "../utils/element";

// Editors
export function createCodeBlock(): HTMLElement {
  const editorsBlock = createElement("div", ["game__block", "block__code"]);
  const cssEditor = createCSSEditor();
  const htmlEditor = createHTMLEditor();

  editorsBlock.append(cssEditor, htmlEditor);

  return editorsBlock;
}

// CSS
function createCSSEditor(): HTMLElement {
  const cssEditor = createElement("div", ["editor", "block__code--css"]);

  return cssEditor;
}

// HTML
function createHTMLEditor(): HTMLElement {
  const htmlEditor = createElement("div", ["editor", "block__code--html"]);

  return htmlEditor;
}
