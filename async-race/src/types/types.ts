// View
export const enum View {
  Garage = "garage",
  Winners = "winners",
}

// Selectors
export const enum Selector {
  // Header
  Header = ".header",
  HeaderContainer = ".header__container",
  HeaderButtons = ".header__buttons",
  ViewButton = ".button__view",
  ViewButtonActive = ".button__view.active",
  ButtonGarage = "#button__garage",
  ButtonWinners = "#button__winners",
  Bubble = ".bubble",
  // Form
  FormsContainer = ".forms__container",
  FormCreate = ".form__create",
  FormUpdate = ".form__update",
  FormUpdateOpen = ".form__update--open",
  FormContainer = ".form__container",
  InputField = ".input-text",
  InputCreate = ".input-text__create",
  InputUpdate = ".input-text__update",
  InputColorCreate = ".input-color__create",
  InputColorUpdate = ".input-color__update",
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
  // Tracks
  Track = ".track",
  TrackContainer = ".track__container",
  TrackHeader = ".track__header",
  TrackButtons = ".track__buttons",
  ButtonTrack = ".button__track",
  ButtonStart = ".button__start",
  ButtonStop = ".button__stop",
  ButtonDelete = ".button__delete",
  ButtonEdit = ".button__edit",
  Car = ".car",
  TrackBody = ".track__body",
  CarName = ".car__name",
  Flag = ".flag",

  // Pagination
  PagesContainer = ".pages",
  Page = ".page",
  CurrentPage = ".page--current",
  PagesButtons = ".pages__buttons",
  ButtonPage = ".button__page",
  ButtonPrev = ".button__prev",
  ButtonNext = ".button__next",
  // Footer
  Footer = ".footer",
  FooterContainer = ".footer__container",
  FooterInfo = ".footer__info",
}

// Buttons
export const enum Button {
  Garage = "garage",
  Winners = "winners",
  Start = "start",
  Stop = "stop",
  Edit = "edit",
  Delete = "delete",
  Create = "create",
  Update = "update",
  CancelEdit = "cancel",
  Generate = "generate",
  Race = "race",
  Reset = "reset",
  Prev = "prev",
  Next = "next",
}

// API

// Get
export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface CarsData {
  items: Car[];
  count: string;
}

// Create
export interface NewCar {
  name: string;
  color: string;
}

// SVG
export interface SVGElement {
  divClass: string;
  ns: string;
  width: string;
  height: string;
  color?: string;
}

// Form inputs
export interface FormInputs {
  inputText: HTMLInputElement;
  inputColor: HTMLInputElement;
}

// Types
export type Callback = (this: HTMLElement, e: Event) => void;
export type ClassNames = Selector[] | string[];

// Makes and Models
export interface MakeModel {
  make: string;
  models: string[];
}
