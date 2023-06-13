import News from "./news";
import Sources from "./sources";
import { NewsArray, SourcesArray, Data } from "../../types/types";

// Class
export class AppView {
  readonly news: News;
  readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public renderNews(data: Data): void {
    if ("articles" in data) {
      const values: NewsArray | [] = data?.articles ? data.articles : [];
      this.news.render(values);
    }
  }

  public renderSources(data: Data): void {
    if ("sources" in data) {
      const values: SourcesArray | [] = data?.sources ? data.sources : [];
      this.sources.render(values);
    }
  }
}

export default AppView;
