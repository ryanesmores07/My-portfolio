import React, { useContext, useState } from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

import { Hamburger } from "../components"

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links, hideSidebar } =
    useContext(GatsbyContext)
  const [animate, setAnimate] = useState("")

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

  .nav-items {
  }

  .burger-button {
  }
  .toggle-btn {
    /* margin-right: 3rem; */
    width: 15vw;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7rem;
    /* border-radius: 2rem; */
    border: transparent;
    /* color: var(--clr-black); */
    background: transparent;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus {
      /* background: var(--clr-primary-3); */
    }
  }

  @media (min-width: 390px) {
    .nav-items {
      display: none;
    }
  }
`

export default Navbar
