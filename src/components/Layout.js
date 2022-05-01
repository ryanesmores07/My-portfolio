import React, { useContext } from "react"
import "../assets/css/main.css"
import { GatsbyContext } from "../context/context"

import { Navbar, Footer, Sidebar, Hamburger, Navigation } from "../components/"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
