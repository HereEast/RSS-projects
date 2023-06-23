// Levels

type LevelData = {
  id: string;
  title: string;
  answer: string;
};

export type Levels = LevelData[];

// Editors DOM

export type EditorParams = {
  classNames: string[];
  title: string;
  fileName: string;
  editorContent: string;
};
