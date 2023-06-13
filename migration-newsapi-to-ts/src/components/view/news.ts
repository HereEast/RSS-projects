import { NewsArray } from "../../types/types";
import { Selector } from "../../types/enums";
import placeholder from "../../assets/placeholder.png";

class News {
  render(data: NewsArray | []): void {
    const news = data.length >= 10 ? data.filter((_el, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();

    const newsItemTemp = document.querySelector(Selector.NewsTemplate);
    const newsContainer = document.querySelector(Selector.NewsContainer);

    if (!newsItemTemp || !(newsItemTemp instanceof HTMLTemplateElement)) {
      throw Error(`Can't find DOM element ${Selector.NewsTemplate}`);
    }
    if (!newsContainer) throw Error(`Can't find DOM element ${Selector.NewsContainer}`);

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);

      if (!newsClone || !(newsClone instanceof DocumentFragment)) {
        throw Error(`Failed to clone ${newsItemTemp}`);
      }

      const newsItem = newsClone.querySelector(Selector.NewsItem);
      const photo = newsClone.querySelector(Selector.Photo);
      const author = newsClone.querySelector(Selector.Author);
      const date = newsClone.querySelector(Selector.Date);
      const title = newsClone.querySelector(Selector.Title);
      const source = newsClone.querySelector(Selector.Source);
      const description = newsClone.querySelector(Selector.Description);
      const link = newsClone.querySelector(Selector.Link);

      if (!newsItem) throw Error(`Can't find DOM element ${Selector.NewsItem}`);
      if (!photo) throw Error(`Can't find DOM element ${Selector.Photo}`);
      if (!author) throw Error(`Can't find DOM element ${Selector.Author}`);
      if (!date) throw Error(`Can't find DOM element ${Selector.Date}`);
      if (!title) throw Error(`Can't find DOM element ${Selector.Title}`);
      if (!source) throw Error(`Can't find DOM element ${Selector.Source}`);
      if (!description) throw Error(`Can't find DOM element ${Selector.Description}`);
      if (!link) throw Error(`Can't find DOM element ${Selector.Link}`);

      if (idx % 2) newsItem.classList.add("alt");

      if (photo instanceof HTMLElement) {
        photo.style.backgroundImage = `url(${item.urlToImage || placeholder})`;
      }

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
