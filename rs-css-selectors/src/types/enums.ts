export const enum Selector {
  Main = ".main",
  ShowLevelsBtn = ".button--levels",
  HideLevelsBtn = ".button--hide",
  LevelsPanel = ".section__levels",
  LevelsContainer = ".levels__container",
  LevelItem = ".level__item",
  DatasetID = "[data-id]",
  PanelHeaderLevelNumber = ".section__levels .header__data--level",
  MobileHeaderLevelNumber = ".header .header__data--level",
  TaskText = ".task__text",
  HTMLEditorContentContainer = ".editor--html .content__container",
  GraphicsContainer = ".graphics__container",
  LevelsButtons = ".levels__header .header__buttons",
  LevelsButton = ".levels__button",
  NextLevelButton = ".button--next",
  PrevLevelButton = ".button--prev",
  Input = "input",
  CheckButton = ".button--check",
}

export const enum ClassName {
  NextButton = "button--next",
  PrevButton = "button--prev",
}

export const enum Entity {
  Less = "&lt;",
  Greater = "&gt;",
}

export const enum Info {
  TotalLevels = 10,
  InputPlaceholder = "Type in a CSS Selector...",
}
