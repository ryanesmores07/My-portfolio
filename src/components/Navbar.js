import React, { useContext, useState } from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

import { Hamburger } from "../components"

const Navbar = () => {
  const { hideSidebar } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <nav className="container">
        <div className="logo">
          <Link to="/" onClick={() => hideSidebar()}>
            <StaticImage
              className="logo"
              src="../../static/LogoMakr.png"
              alt="logo"
            />
          </Link>
        </div>
        <div role="button" className="burger-button">
          <Hamburger />
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  /* background-color: pink; */
  position: sticky;
  width: 100%;
  z-index: 10;
  top: 0px;
  transition: top 0.6s ease 0s;

  .container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 90%; */
    padding: 3rem 4rem;
  }

  .logo {
    max-width: 10rem;
  }
`

export default Navbar
