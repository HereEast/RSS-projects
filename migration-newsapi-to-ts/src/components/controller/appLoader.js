import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "a7e202826fa24c73b3c0aeda8a237ea6" // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
