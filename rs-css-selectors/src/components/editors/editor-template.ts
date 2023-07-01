import { createElement } from "../../utils/create-element";
import { EditorParams } from "../../types/types";

export function createEditor(params: EditorParams): HTMLElement {
  const editor = createElement("div", params.classNames);

  const editorHeader = `
    <div class="editor__header">
      <span class="editor__title">${params.title}</span>
      <span class="editor__file">${params.fileName}</span>
    </div>
  `;

  const linesSpans = new Array(25)
    .fill(0)
    .map((_, i) => `<span>${i + 1}</span>`)
    .join("");

  const editorBody = `
    <div class="editor__body">
      <div class="body__panel--lines">${linesSpans}</div>
      <div class="body__panel--content">
        ${params.editorContent}
      </div>
    </div>
  `;

  editor.insertAdjacentHTML("beforeend", editorHeader);
  editor.insertAdjacentHTML("beforeend", editorBody);

  return editor;
}
