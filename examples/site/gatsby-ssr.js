import { JaenProvider } from "@snek-at/jaen-cms";
import * as React from "react"

export const wrapRootElement = ({ element }) => {
  return <JaenProvider>{element}</JaenProvider>;
};
