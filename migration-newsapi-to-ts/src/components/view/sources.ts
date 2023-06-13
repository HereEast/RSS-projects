import { SourcesArray } from "../../types/types";
import { Selector } from "../../types/enums";

class Sources {
  render(data: SourcesArray | []): void {
    const fragment = document.createDocumentFragment();

    const sourceItemTemp = document.querySelector(Selector.SourceTemplate);
    const sourcesContainer = document.querySelector(Selector.SourcesContainer);

    if (!sourceItemTemp || !(sourceItemTemp instanceof HTMLTemplateElement)) {
      throw Error(`Can't find DOM element ${Selector.SourceTemplate}`);
    }
    if (!sourcesContainer) throw Error(`Can't find DOM element ${Selector.SourcesContainer}`);

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);

      if (!sourceClone || !(sourceClone instanceof DocumentFragment)) {
        throw Error(`Failed to clone ${sourceItemTemp}`);
      }

      const itemName = sourceClone.querySelector(Selector.SourceItemName);
      const source = sourceClone.querySelector(Selector.SourceItem);

      if (!itemName) throw Error(`Can't find DOM element ${Selector.SourceItemName}`);
      if (!source) throw Error(`Can't find DOM element ${Selector.SourceItem}`);

      itemName.textContent = item.name;
      source.setAttribute("data-source-id", item.id);

      fragment.append(sourceClone);
    });

    sourcesContainer.append(fragment);
  }
}

export default Sources;
