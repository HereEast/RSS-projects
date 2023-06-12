import "./news.css";
import { Article, NewsArray } from "../../../types/types";
import { IDrawData } from "../../../types/interfaces";
import { Selector } from "../../../types/enums";

class News implements Readonly<IDrawData> {
  draw(data: NewsArray | []): void {
    let news: NewsArray;

    if (data.length >= 10) {
      news = data.filter((_el: Article, idx: number) => idx < 10);
    } else news = data;

    const fragment = document.createDocumentFragment() as DocumentFragment;

    const newsItemTemp = document.querySelector(Selector.NewsTemplate) as HTMLTemplateElement | null;
    const newsContainer = document.querySelector(Selector.NewsContainer) as HTMLElement | null;

    if (!newsItemTemp) throw Error(`Can't find DOM element ${Selector.NewsTemplate}`);
    if (!newsContainer) throw Error(`Can't find DOM element ${Selector.NewsContainer}`);

    news.forEach((item: Article, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment | null;
      if (!newsClone) throw Error(`Failed to clone ${newsItemTemp}`);

      const newsItem = newsClone.querySelector(Selector.NewsItem) as HTMLElement | null;
      const photo = newsClone.querySelector(Selector.Photo) as HTMLElement | null;
      const author = newsClone.querySelector(Selector.Author) as HTMLElement | null;
      const date = newsClone.querySelector(Selector.Date) as HTMLElement | null;
      const title = newsClone.querySelector(Selector.Title) as HTMLElement | null;
      const source = newsClone.querySelector(Selector.Source) as HTMLElement | null;
      const description = newsClone.querySelector(Selector.Description) as HTMLElement | null;
      const link = newsClone.querySelector(Selector.Link) as HTMLLinkElement | null;

      if (!newsItem) throw Error(`Can't find DOM element ${Selector.NewsItem}`);
      if (!photo) throw Error(`Can't find DOM element ${Selector.Photo}`);
      if (!author) throw Error(`Can't find DOM element ${Selector.Author}`);
      if (!date) throw Error(`Can't find DOM element ${Selector.Date}`);
      if (!title) throw Error(`Can't find DOM element ${Selector.Title}`);
      if (!source) throw Error(`Can't find DOM element ${Selector.Source}`);
      if (!description) throw Error(`Can't find DOM element ${Selector.Description}`);
      if (!link) throw Error(`Can't find DOM element ${Selector.Link}`);

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
