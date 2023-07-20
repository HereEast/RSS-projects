// View
export const enum View {
  Garage = "garage",
  Winners = "winners"
}

// Selectors
export const enum Selector {
  // Header
  Header = ".header",
  HeaderContainer = ".header__container",
  HeaderButtons = ".header__buttons",
  ViewButton = ".button__view",
  ViewButtonActive = ".button__view.active",
  ButtonGarage = "#button--garage",
  ButtonWinners = "#button--winners",
  Bubble = ".bubble",
  // Form
  FormsContainer = ".forms__container",
  FormCreate = ".form__create",
  FormUpdate = ".form__update",
  InputContainer = ".input__container",
  InputField = ".input-text",
  InputColor = ".input-color",
  ButtonCreate = ".button__create",
  ButtonUpdate = ".button__update",
  ButtonCancel = ".button__cancel",
  ButtonGenerate = ".button__generate",
  FormsHidden = ".forms--hidden",
  // Main
  Main = ".main",
  MainContainer = ".main__container",
  // View header
  ViewHeader = ".view__header",
  TitleContainer = ".view__title",
  Title = ".title",
  CarsCount = ".view__count",
  CurrentCount = ".count",
  ViewButtons = ".view__buttons",
  ButtonRace = ".button__race",
  ButtonReset = ".button__reset",
  // View body
  ViewBody = ".view__body",

  // Pagination
  PagesContainer = ".pages",
  PageCurrent = ".pages__current",
  PagesButtons = ".pages__buttons",
  PagePrev = ".button__prev",
  PageNext = ".button__next",
  // Footer
  Footer = ".footer",
  FooterContainer = ".footer__container",
  FooterInfo = ".footer__info",
}

// Buttons
export const enum ButtonName {
  Garage = "Garage",
  Winners = "Winners",
}

// API

export interface CarData {
  name: string;
  color: string;
  id: number;
}

export type CarsData = CarData[];
