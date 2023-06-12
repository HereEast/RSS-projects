import "./sources.css";
import { Source, SourcesArray } from "../../../types/types";
import { IRenderData } from "../../../types/interfaces";
import { Selector } from "../../../types/enums";

class Sources implements IRenderData {
  draw(data: SourcesArray | []): void {
    const fragment = document.createDocumentFragment() as DocumentFragment;

    const sourceItemTemp = document.querySelector(Selector.SourceTemplate) as HTMLTemplateElement | null;
    const sourcesContainer = document.querySelector(Selector.SourcesContainer) as HTMLElement | null;

    if (!sourceItemTemp) throw Error(`Can't find DOM element ${Selector.SourceTemplate}`);
    if (!sourcesContainer) throw Error(`Can't find DOM element ${Selector.SourcesContainer}`);

    data.forEach((item: Source) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
      if (!sourceClone) throw Error(`Failed to clone ${sourceItemTemp}`);

      const itemName = sourceClone.querySelector(Selector.SourceItemName) as HTMLElement | null;
      const source = sourceClone.querySelector(Selector.SourceItem) as HTMLLIElement | null;

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
