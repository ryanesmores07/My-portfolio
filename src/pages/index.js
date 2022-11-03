import React from "react"

import {
  Hero,
  Project,
  HeroNew,
  Services,
  SelectedProjects,
  About,
  Contact,
  FooterNew,
} from "../components"

export default function Home() {
  return (
    <div>
      <HeroNew />
      <Services />
      <SelectedProjects />
      <About />
      <Contact />
      <FooterNew />
    </div>
  )
}
