import React from "react"

import {
  Hero,
  Project,
  HeroNew,
  Services,
  SelectedProjects,
} from "../components"

export default function Home() {
  return (
    <div>
      <HeroNew />
      <Services />
      <SelectedProjects />
    </div>
  )
}
