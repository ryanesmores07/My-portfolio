import React from "react"
import "../assets/css/main.css"

import { Navbar, FooterNew } from "../components/"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <FooterNew />
    </div>
  )
}

export default Layout
