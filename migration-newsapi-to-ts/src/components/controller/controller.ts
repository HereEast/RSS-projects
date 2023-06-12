import AppLoader from "./appLoader";
import { IController } from "../../types/interfaces";
import { NewsData, SourcesData } from "../../types/types";

class AppController extends AppLoader implements IController {
  getSources(callback: (data: SourcesData) => void): void {
    super.getResp({ endpoint: "sources" }, callback);
  }

  getNews(e: Event, callback: (data: NewsData) => void): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains("source__item")) {
        const sourceId: string = target.getAttribute("data-source-id") || "";

        if (newsContainer.getAttribute("data-source") !== sourceId) {
          newsContainer.setAttribute("data-source", sourceId);
          super.getResp(
            {
              endpoint: "everything",
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
