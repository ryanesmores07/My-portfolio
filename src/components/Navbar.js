import React, { useContext, useState } from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

import { Hamburger } from "../components"

const Navbar = () => {
  const { hideSidebar, links } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={() => hideSidebar()}>
            <StaticImage
              className="logo"
              src="../../static/ryanlogowhite.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="links">
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div role="button" className="burger-button">
          <Hamburger />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  overflow: hidden;
  background-color: black;
  width: 100%;
  z-index: 10;
  top: 0;

  .container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 90%; */
    padding: 3rem 4rem;
    .logo {
      width: 10rem;
    }
    .links {
      display: none;
    }
  }
  @media (min-width: 1164px) {
    .container {
      .links {
        display: block;
        ul {
          display: flex;
          align-items: center;
          gap: 3rem;
          cursor: pointer;
          li {
            &:last-child {
              background-color: #191919;
              border-radius: 50rem;
              padding: 0.5rem 3rem;
              font-weight: 500;
              /* position: absolute;
              right: 10rem;
              justify-self: flex-end; */
            }
            a {
              color: white;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .container {
      max-width: 140rem;
    }
  }
  @media (min-width: 1920px) {
    padding: 0 20rem;
    .container {
      .logo {
        /* max-width: 13rem; */
        width: 20rem;
      }
      .links {
        ul {
          gap: 4rem;

          li {
            &:last-child {
              right: 24rem;
            }
            a {
            }
          }
        }
      }
    }
  }
`

export default Navbar
