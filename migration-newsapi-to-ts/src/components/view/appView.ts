import News from "./news";
import Sources from "./sources";
import { NewsArray, SourcesArray, Data } from "../../types/types";
import { IAppView } from "../../types/interfaces";

// Class
export class AppView implements Readonly<IAppView> {
  public news: News;
  public sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: Data): void {
    if ("articles" in data) {
      const values: NewsArray | [] = data?.articles ? data.articles : [];
      this.news.draw(values);
    } else return;
  }

  public drawSources(data: Data): void {
    if ("sources" in data) {
      const values: SourcesArray | [] = data?.sources ? data.sources : [];
      this.sources.draw(values);
    } else return;
  }
}

export default AppView;
