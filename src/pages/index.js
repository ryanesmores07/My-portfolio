import React from "react"

import {
  HeroNew,
  Services,
  SelectedProjects,
  About,
  Contact,
} from "../components"

export default function Home() {
  return (
    <div>
      <HeroNew />
      <Services />
      <SelectedProjects />
      <About />
      <Contact />
    </div>
  )
}
