import React, { useEffect } from "react";
import { store, autoEffect } from "@risingstack/react-easy-state";
import Grid from "./components/layout/grid";
import { appStore } from "./store";
import animator from "./services/animator";

autoEffect(() => {
  animator(appStore.path);
});

export default function App() {
  return <Grid />;
}
