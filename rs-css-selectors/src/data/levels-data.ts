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
    task: "Select a circle in a blue fish",
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
    task: "Select a purple trex",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <trex/></trex>
        <trex/></trex>
        <trex id="purple"/></trex>
        <trex/></trex>
        <trex/></trex>
        <trex/></trex>
      </div>`,
  },
  {
    id: "4",
    title: ".classname",
    task: "Select small ducks",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <duck/></duck>
        <duck class="small"/></duck>
        <box>
          <duck class="small"/></duck>
        </box>
        <box/></box>
      </div>`,
  },
  {
    id: "5",
    title: "A.classname",
    task: "Select all fish in circles",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <triangle/></triangle>
        <fish class="fish"/></fish>
        <circle/>
          <fish class="fish"/>
        </circle>
        <circle/>
          <fish class="fish"/>
        </circle>
        <circle/></circle>
      </div>`,
  },
  {
    id: "6",
    title: "*",
    task: "Select all toys at the playground",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <triangle/></triangle>
        <duck/></duck>
        <box/>
          <triangle/>
        </box>
        <circle/></circle>
      </div>`,
  },
  {
    id: "7",
    title: "[attribute]",
    task: "Select somebody's toys",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <trex/></trex>
        <box kid="Peter"/>
          <bear/></bear>
        </box>
        <box kid="Mary"/>
          <bear/></bear>
        </box>
        <trex kid="Jacob"/></trex>
      </div>`,
  },
  {
    id: "8",
    title: ":n-child(A)",
    task: "Select the 3rd duck",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <duck/></duck>
        <duck class="small"/></duck>
        <duck/></duck>
        <duck/></duck>
      </div>`,
  },
  {
    id: "9",
    title: ":empty",
    task: "Select empty toy boxes",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <box/></box>
        <box/></box>
        <bear class="teddy"/></bear>
        <box/>
          <triangle class="yellow"/></triangle>
        </box>
      </div>`,
  },
  {
    id: "10",
    title: ":not(X)",
    task: "Select big triangles",
    answer: "triangle",
    status: "unfinished",
    code: `
      <div class="playground">
        <box/>
          <triangle class="small yellow"/></triangle>
        </box>
        <box/>
          <triangle class="yellow"/></triangle>
        </box>
        <triangle/></triangle>
        <triangle class="small"/></triangle>
        <circle/></circle>
      </div>`,
  },
];
