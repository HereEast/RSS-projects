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
  FormUpdateOpen = ".form__update--open",
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
  Start = "Start",
  Stop = "Stop",
  Edit = "Edit",
  Delete = "Delete",
  SaveEdit = "Save",
  CancelEdit = "Cancel"
}

// API

// Get
export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface CarsData {
  items: Car[],
  count: string
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

// Types
export type Callback = (this: HTMLElement, e: Event) => void;
