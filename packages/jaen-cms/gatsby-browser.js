import { PageProvider } from ".";
import * as React from "react"

export const wrapPageElement = ({ element }) => {
  return <PageProvider>{element}</PageProvider>
}

