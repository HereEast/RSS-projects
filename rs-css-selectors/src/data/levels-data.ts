import { Levels } from "../types/types";

export const levelsData: Levels = [
  {
    id: "1",
    title: "A",
    task: "Select green triangles",
    answer: "triangle",
    code: `
      <div class="playground">
        <triangle el="1"/></triangle>
        <circle el="2"/></circle>
        <triangle el="3"/></triangle>
      </div>`,
  },
  {
    id: "2",
    title: "A B",
    task: "Select a circle in a blue fish",
    answer: "fish circle",
    code: `
      <div class="playground">
        <fish el="1">
          <circle el="2"/>
        </fish el="3">
        <circle el="4"/></circle>
        <circle el="5"/></circle>
      </div>`,
  },
  {
    id: "3",
    title: "#id",
    task: "Select a purple trex",
    answer: "#purple",
    code: `
      <div class="playground">
        <trex/></trex>
        <trex id="purple"/></trex>
        <trex/></trex>
        <trex/></trex>
      </div>`,
  },
  {
    id: "4",
    title: ".classname",
    task: "Select small toys",
    answer: ".small",
    code: `
      <div class="playground">
        <duck/></duck>
        <triangle class="small"/></triangle>
        <box>
          <duck class="small"/></duck>
        </box>
        <box/></box>
      </div>`,
  },
  {
    id: "5",
    title: "A.classname",
    task: "Select all small fishes",
    answer: "fish.small",
    code: `
      <div class="playground">
        <fish/></fish>
        <circle>
          <fish class="small"/>
        </circle>
        <box>
          <fish class="small"/>
        </box>
        <circle class="small"/></circle>
      </div>`,
  },
  {
    id: "6",
    title: "*",
    task: "Select all toys at the playground",
    answer: "*",
    code: `
      <div class="playground">
        <triangle/></triangle>
        <duck/></duck>
        <box>
          <triangle/>
        </box>
        <circle class="small"/></circle>
      </div>`,
  },
  {
    id: "7",
    title: "[attribute]",
    task: "Select somebody's toys",
    answer: "[kid]",
    code: `
      <div class="playground">
        <trex/></trex>
        <box kid="Mary">
          <bear/></bear>
        </box>
        <trex kid="Jacob"/></trex>
      </div>`,
  },
  {
    id: "8",
    title: ":n-child(A)",
    task: "Select the 3rd duck",
    answer: "duck:nth-child(3)",
    code: `
      <div class="playground">
        <duck/></duck>
        <duck/></duck>
        <duck/></duck>
        <duck/></duck>
      </div>`,
  },
  {
    id: "9",
    title: ":empty",
    task: "Select empty toy boxes",
    answer: "box:empty",
    code: `
      <div class="playground">
        <box/></box>
        <box/></box>
        <bear class="teddy"/></bear>
        <box>
          <triangle class="yellow"/></triangle>
        </box>
      </div>`,
  },
  {
    id: "10",
    title: ":not(X)",
    task: "Select big triangles",
    answer: "triangle:not(.small)",
    code: `
      <div class="playground">
        <box>
          <triangle class="small yellow"/></triangle>
        </box>
        <box>
          <triangle class="yellow"/></triangle>
        </box>
        <triangle/></triangle>
        <triangle class="small"/></triangle>
      </div>`,
  },
];
