// Levels

type LevelData = {
  id: string;
  title: string;
  task: string;
  answer: string;
  status: string;
};

export type Levels = LevelData[];

// Editors DOM

export type EditorParams = {
  classNames: string[];
  title: string;
  fileName: string;
  editorContent: string;
};
