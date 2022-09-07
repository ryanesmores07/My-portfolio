import React from "react"
import "../assets/css/main.css"

import { Navbar, Footer } from "../components/"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
