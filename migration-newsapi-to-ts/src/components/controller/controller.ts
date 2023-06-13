import AppLoader from "./appLoader";
import { Data } from "../../types/types";

class AppController extends AppLoader {
  getSources(callback: (data: Data) => void): void {
    super.getResp({ endpoint: "sources" }, callback);
  }

  getNews(e: Event, callback: (data: Data) => void): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    if (!target) throw Error("Can't find e.target element.");
    if (!newsContainer) throw Error("Can't find e.currentTarget element.");

    while (target !== newsContainer) {
      if (target.classList.contains("source__item")) {
        const sourceId = target.getAttribute("data-source-id") || "";

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

      const parentNode = target.parentNode as HTMLElement;
      if (!parentNode) throw Error("Can't find target.parentNode.");

      target = parentNode;
    }
  }
}

export default AppController;
