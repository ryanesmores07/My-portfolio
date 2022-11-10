import React from "react"
import "../assets/css/main.css"
import styled from "styled-components"

import { Navbar, FooterNew } from "../components/"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <FooterNew />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Layout
