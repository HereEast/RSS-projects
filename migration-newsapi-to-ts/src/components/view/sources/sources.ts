import "./sources.css";
import { Source, SourcesData, IRenderData } from "../../../types";
import { Selector } from "../../../types/enums";

class Sources implements IRenderData {
  draw(data: SourcesData["sources"] | []): void {
    const fragment = document.createDocumentFragment() as DocumentFragment;

    const sourceItemTemp = document.querySelector(Selector.SourceTemplate) as HTMLTemplateElement;
    const sourcesContainer = document.querySelector(Selector.SourcesContainer) as HTMLElement;

    data.forEach((item: Source) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      const itemName = sourceClone.querySelector(Selector.SourceItemName) as HTMLElement;
      const source = sourceClone.querySelector(Selector.SourceItem) as HTMLLIElement;

      itemName.textContent = item.name;
      source.setAttribute("data-source-id", item.id);

      fragment.append(sourceClone);
    });

    sourcesContainer.append(fragment);
  }
}

export default Sources;
