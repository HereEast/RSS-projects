import { createElement } from "../../utils/create-element";
import { EditorParams } from "../../types/types";
import { createEditor } from "./editor-template";

// Editors
export function createEditorsBlock(): HTMLElement {
  const editorsBlock = createElement("div", ["game__block", "block__editors"]);
  const cssEditor = createCSSEditor();
  const htmlEditor = createHTMLEditor();

  editorsBlock.append(cssEditor, htmlEditor);

  return editorsBlock;
}

// CSS
function createCSSEditor(): HTMLElement {
  const content = `
    <div class="input__container">
      <input class="blink" type="text" placeholder="Type in a CSS Selector..."></input>
      <button class="button button--check">Enter</button>
    </div>
  `;

  const params: EditorParams = {
    classNames: ["editor", "editor--css"],
    title: "CSS Editor",
    fileName: "style.css",
    editorContent: content,
  };

  const cssEditor = createEditor(params);
  return cssEditor;
}

// HTML
function createHTMLEditor(): HTMLElement {
  const content = "<div class='content__container'></div>";

  const params: EditorParams = {
    classNames: ["editor", "editor--html"],
    title: "HTML View",
    fileName: "playground.html",
    editorContent: content,
  };

  const htmlEditor = createEditor(params);
  return htmlEditor;
}
