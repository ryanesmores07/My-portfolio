import React, { useState, useContext, useEffect } from "react"

import data from "../constants/links"

const GatsbyContext = React.createContext()

// Provider, Consumer

const GatsbyProvide = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(data)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        showSidebar,
        hideSidebar,
        links,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvide }
