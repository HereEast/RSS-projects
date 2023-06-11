import "./news.css";
import { Article, NewsData } from "../../../types/types";
import { IRenderData } from "../../../types/interfaces";
import { Selector } from "../../../types/enums";

class News implements IRenderData {
  draw(data: NewsData["articles"] | []): void {
    let news: NewsData["articles"];

    if (data.length >= 10) {
      news = data.filter((el: Article, idx: number) => idx < 10);
    } else {
      news = data;
    }

    const fragment = document.createDocumentFragment() as DocumentFragment;

    const newsItemTemp = document.querySelector(Selector.NewsTemplate) as HTMLTemplateElement;
    const newsContainer = document.querySelector(Selector.NewsContainer) as HTMLElement;

    news.forEach((item: Article, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
      const newsItem = newsClone.querySelector(Selector.NewsItem) as HTMLElement;
      const photo = newsClone.querySelector(Selector.Photo) as HTMLElement;
      const author = newsClone.querySelector(Selector.Author) as HTMLElement;
      const date = newsClone.querySelector(Selector.Date) as HTMLElement;
      const title = newsClone.querySelector(Selector.Title) as HTMLElement;
      const source = newsClone.querySelector(Selector.Source) as HTMLElement;
      const description = newsClone.querySelector(Selector.Description) as HTMLElement;
      const link = newsClone.querySelector(Selector.Link) as HTMLLinkElement;

      if (idx % 2) newsItem.classList.add("alt");

      photo.style.backgroundImage = `url(${item.urlToImage || "img/news_placeholder.jpg"})`;
      author.textContent = item.author || item.source.name;
      date.textContent = item.publishedAt.slice(0, 10).split("-").reverse().join("-");

      title.textContent = item.title;
      source.textContent = item.source.name;
      description.textContent = item.description;
      link.setAttribute("href", item.url);

      fragment.append(newsClone);
    });

    newsContainer.innerHTML = "";
    newsContainer.appendChild(fragment);
  }
}

export default News;
