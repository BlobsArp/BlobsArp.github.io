import { store } from "@risingstack/react-easy-state";

const appStore = store({
  edgesPrev: 0,
  edges: 6,
  growth: 6,
  size: 500,
  path: "",
  id: "",
  color: "#d1d8e0",
  type: "color",
  gradient: ["#d1d8e0", "#4a5568"],
  stroke: false,
});

export { appStore };
