import { createElement } from "../../utils/element";
import { EditorParams } from "../../types/types";

export function createEditor(params: EditorParams): HTMLElement {
  const editor = createElement("div", params.classNames);

  const editorHeader = `
    <div class="editor__header">
      <span class="editor__title">${params.title}</span>
      <span class="editor__file">${params.fileName}</span>
    </div>
  `;

  const linesSpans = (): string => {
    let spans = "";

    for (let i = 1; i <= 25; i++) {
      spans += `<span>${i}</span>`;
    }

    return spans;
  };

  const editorBody = `
    <div class="editor__body">
      <div class="body__panel--lines">${linesSpans()}</div>
      <div class="body__panel--content">
        ${params.editorContent}
      </div>
    </div>
  `;

  editor.insertAdjacentHTML("beforeend", editorHeader);
  editor.insertAdjacentHTML("beforeend", editorBody);

  return editor;
}
