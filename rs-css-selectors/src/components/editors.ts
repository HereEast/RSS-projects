import { createElement } from "../utils/element";
import { EditorParams } from "../types/types";

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
      <input type="text" placeholder="Type in a CSS Selector..."></input>
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

//
//

function createEditor(params: EditorParams): HTMLElement {
  const editor = createElement("div", params.classNames);

  const editorHeader = `
    <div class="editor__header">
      <span class="editor__title">${params.title}</span>
      <span class="editor__file">${params.fileName}</span>
    </div>
  `;

  const editorBody = `
    <div class="editor__body">
      <div class="body__panel--lines">${createLinesCount()}</div>
      <div class="body__panel--content">
        ${params.editorContent}
      </div>
    </div>
  `;

  editor.insertAdjacentHTML("beforeend", editorHeader);
  editor.insertAdjacentHTML("beforeend", editorBody);

  return editor;
}

// Lines
function createLinesCount(): string {
  let lines = "";

  for (let i = 1; i <= 25; i++) {
    const span = `<span>${i}</span>`;
    lines += span;
  }

  return lines;
}
