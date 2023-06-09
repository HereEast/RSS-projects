import "./news.css";
import { Data, IRenderNews } from "../../../types";

class News implements IRenderNews {
  draw(data: Data): void {
    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();

    const newsItemTemp = document.querySelector(
      "#newsItemTemp"
    ) as HTMLTemplateElement;

    const newsContainer = document.querySelector(".news") as HTMLElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
      const newsItem = newsClone.querySelector(".news__item") as HTMLElement;
      const photo = newsClone.querySelector(".news__meta-photo") as HTMLElement;
      const author = newsClone.querySelector(
        ".news__meta-author"
      ) as HTMLElement;

      const date = newsClone.querySelector(".news__meta-date") as HTMLElement;
      const title = newsClone.querySelector(
        ".news__description-title"
      ) as HTMLElement;

      const source = newsClone.querySelector(
        ".news__description-source"
      ) as HTMLElement;

      const description = newsClone.querySelector(
        ".news__description-content"
      ) as HTMLElement;

      const link = newsClone.querySelector(
        ".news__read-more a"
      ) as HTMLLinkElement;

      if (idx % 2) newsItem.classList.add("alt");

      photo.style.backgroundImage = `url(${
        item.urlToImage || "img/news_placeholder.jpg"
      })`;
      author.textContent = item.author || item.source.name;
      date.textContent = item.publishedAt
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("-");

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
