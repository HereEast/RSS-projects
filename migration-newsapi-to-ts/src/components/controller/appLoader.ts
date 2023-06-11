import Loader from "./loader";
import { ILoader } from "../../types/interfaces";

class AppLoader extends Loader implements Partial<ILoader> {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "a7e202826fa24c73b3c0aeda8a237ea6",
    });
  }
}

export default AppLoader;
