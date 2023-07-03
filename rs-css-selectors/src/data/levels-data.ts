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
        </fish el="1">
        <circle el="3"/></circle>
        <circle el="4"/></circle>
      </div>`,
  },
  {
    id: "3",
    title: "#id",
    task: "Select a purple trex",
    answer: "#purple",
    code: `
      <div class="playground">
        <trex el="1"/></trex>
        <trex el="2" id="purple"/></trex>
        <trex el="3"/></trex>
        <trex el="4"/></trex>
      </div>`,
  },
  {
    id: "4",
    title: ".classname",
    task: "Select small toys",
    answer: ".small",
    code: `
      <div class="playground">
        <duck el="1"/></duck>
        <triangle el="2" class="small"/></triangle>
        <box el="3">
          <duck el="4" class="small"/></duck>
        </box el="3">
        <box el="5"/></box>
      </div>`,
  },
  {
    id: "5",
    title: "A.classname",
    task: "Select all small fishes",
    answer: "fish.small",
    code: `
      <div class="playground">
        <fish el="1"/></fish>
        <circle el="2">
          <fish el="3" class="small"/>
        </circle el="2">
        <box el="4">
          <fish el="5" class="small"/>
        </box el="4">
        <circle el="6" class="small"/></circle>
      </div>`,
  },
  {
    id: "6",
    title: "*",
    task: "Select all toys at the playground",
    answer: "*",
    code: `
      <div class="playground">
        <triangle el="1"/></triangle>
        <duck el="2"/></duck>
        <box el="3">
          <triangle/ el="4">
        </box el="3">
        <circle el="5" class="small"/></circle>
      </div>`,
  },
  {
    id: "7",
    title: "[attribute]",
    task: "Select somebody's toys",
    answer: "[kid]",
    code: `
      <div class="playground">
        <trex el="1"/></trex>
        <box el="2" kid="Mary">
          <bear el="3"/></bear>
        </box el="2">
        <trex el="4" kid="Jacob"/></trex>
      </div>`,
  },
  {
    id: "8",
    title: ":n-child(A)",
    task: "Select the 3rd duck",
    answer: "duck:nth-child(3)",
    code: `
      <div class="playground">
        <duck el="1"/></duck>
        <duck el="2"/></duck>
        <duck el="3"/></duck>
        <duck el="4"/></duck>
      </div>`,
  },
  {
    id: "9",
    title: ":empty",
    task: "Select empty toy boxes",
    answer: "box:empty",
    code: `
      <div class="playground">
        <box el="1"/></box>
        <box el="2"/></box>
        <bear el="3" class="teddy"/></bear>
        <box el="4">
          <triangle el="5" class="yellow"/></triangle>
        </box el="4">
      </div>`,
  },
  {
    id: "10",
    title: ":not(X)",
    task: "Select big triangles",
    answer: "triangle:not(.small)",
    code: `
      <div class="playground">
        <box el="1">
          <triangle el="2" class="small yellow"/></triangle>
        </box el="1">
        <box el="3">
          <triangle el="4" class="yellow"/></triangle>
        </box el="3">
        <triangle el="5"/></triangle>
        <triangle el="6" class="small"/></triangle>
      </div>`,
  },
];
