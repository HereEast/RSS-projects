import { Levels } from "../../types/types";
import { Selector } from "../../types/enums";
import { Entity } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getTagsArray } from "./tags-array";

// HTML editor content
export function updateHTMLEditor(id: string, levelsData: Levels): void {
  const contentContainer = getElement(Selector.HTMLEditorContentContainer);

  const level = levelsData.find((data) => data.id === id);
  if (!level) throw Error("Level is not found...");

  let editorContent = "";
  const tagsArray = getTagsArray(level.code);

  tagsArray.forEach((tag) => {
    const tagString = tag.replace("<", Entity.Less).replace(">", Entity.Greater);
    editorContent += `<div class="tag-line">${tagString}</div>`;
  });

  contentContainer.innerHTML = "";
  contentContainer.insertAdjacentHTML("afterbegin", editorContent);
}
