import React from "react"
import Layout from "./src/components/Layout"

import { GatsbyProvide, GatsbyProvider } from "./src/context/context"

export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      <GatsbyProvide>
        <Layout {...props}>{element}</Layout>
      </GatsbyProvide>
    </>
  )
}
