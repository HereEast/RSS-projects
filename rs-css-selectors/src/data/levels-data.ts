import { Levels } from "../types/types";

export const levelsData: Levels = [
  {
    id: "1",
    title: "A",
    task: "Select green triangles",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <triangle/></triangle>
        <circle/></circle>
        <triangle/></triangle>
      </div>`,
  },
  {
    id: "2",
    title: "A B",
    task: "Select a circle in blue fish",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <fish>
          <circle/>
        </fish>
        <circle/></circle>
        <circle/></circle>
      </div>`,
  },
  {
    id: "3",
    title: "#id",
    task: "Here goes the task... 3",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
  {
    id: "4",
    title: ".classname",
    task: "Here goes the task... 4",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
  {
    id: "5",
    title: "A.classname",
    task: "Here goes the task... 5",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
  {
    id: "6",
    title: "*",
    task: "Here goes the task... 6",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
  {
    id: "7",
    title: "[attribute]",
    task: "Here goes the task... 7",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
  {
    id: "8",
    title: ":n-child(A)",
    task: "Here goes the task...8",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
  {
    id: "9",
    title: ":empty",
    task: "Here goes the task... 9",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
  {
    id: "10",
    title: ":not(X)",
    task: "Here goes the task... 10",
    answer: "triangle",
    status: "unfinished",
    code: "",
  },
];
