import React, { useState, useContext, useEffect } from "react"

import links from "../constants/links"

const GatsbyContext = React.createContext()

// Provider, Consumer

const GatsbyProvide = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(links)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, showSidebar, hideSidebar, links }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvide }
