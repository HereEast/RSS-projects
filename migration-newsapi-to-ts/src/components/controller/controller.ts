import AppLoader from "./appLoader";
import { IController } from "../../types/interfaces";
import { Data } from "../../types/types";

class AppController extends AppLoader implements Readonly<IController> {
  getSources(callback: (data: Data) => void): void {
    super.getResp({ endpoint: "sources" }, callback);
  }

  getNews(e: Event, callback: (data: Data) => void): void {
    let target = e.target as HTMLElement | null;
    const newsContainer = e.currentTarget as HTMLElement | null;

    if (!target) throw Error("Can't find e.target element.");
    if (!newsContainer) throw Error("Can't find e.currentTarget element.");

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

      const parentNode = target.parentNode as HTMLElement | null;
      if (!parentNode) throw Error("Can't find target.parentNode.");

      target = parentNode;
    }
  }
}

export default AppController;
