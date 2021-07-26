import { JaenProvider } from "@snek-at/jaen-cms";
import * as React from "react"

import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <JaenProvider>{element}</JaenProvider>;
};