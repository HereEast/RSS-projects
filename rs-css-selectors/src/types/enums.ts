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
  HeaderLevelInfo = ".header__levels",
  BlockEditors = ".block__editors",
  ResetButton = ".button--reset",
  Playground = ".playground",
}

export const enum LevelStatus {
  Unfinished = "unfinished",
  Done = "done",
  Hint = "hint",
}

export const enum Animation {
  Shake = "shake",
  Hide = "hide",
  Dance = "dance",
}

export const enum Entity {
  Less = "&lt;",
  Greater = "&gt;",
}

export const enum Info {
  TotalLevels = 10,
  InputPlaceholder = "Type in a CSS Selector...",
}
