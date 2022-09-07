import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { Sidebar } from "../components/"
import { Link } from "gatsby"

const Hamburger = () => {
  const { links, hideSidebar, showSidebar, isSidebarOpen, setIsSidebarOpen } =
    useContext(GatsbyContext)

  return (
    <Wrapper>
      <div
        className={`menu-btn ${isSidebarOpen ? "open" : ""}`}
        role="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className="menu-btn__burger"></div>
      </div>
      {/* <Sidebar /> */}
      {isSidebarOpen && <Sidebar />}
      {/* {isSidebarOpen && (
        <section className="sidebar-container">
          <ul onClick={() => hideSidebar()}>
            {links.map((link, index) => {
              return (
                <Link to={link.url} className="yo" key={index}>
                  <li>{link.text}</li>
                </Link>
              )
            })}
          </ul>
        </section>
      )} */}
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  .menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    /* border: 3px solid var(--clr-black); */
    z-index: 50;
  }

  .menu-btn__burger {
    width: 4rem;
    height: 3px;
    background: var(--clr-black);
    border-radius: 5px;
    /* box-shadow: 0 2px 5px var(--clr-black); */
    transition: all 0.5s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 4rem;
      height: 3px;
      background: var(--clr-black);
      border-radius: 5px;
      /* box-shadow: 0 2px 5px var(--clr-black); */
      transition: all 0.5s ease-in-out;
    }

    &::before {
      transform: translateY(-12px);
    }
    &::after {
      transform: translateY(12px);
    }
  }

  .sidebar-container {
    overflow: hidden;
    .sidebar {
      position: fixed;
      top: 0rem;
      right: -100%;

      /* transform: translateX(-10rem); */

      height: 100%;
      padding: 7rem 10rem 7rem 7rem;

      background-color: rgba(255, 255, 255, 0.9);
      transition: all 0.5s ease-in-out;

      li {
        color: var(--clr-black);
        /* background-color: red; */
        line-height: 2;
        font-size: 3.5rem;
        font-weight: 300;

        -webkit-text-stroke: 1.2px black;

        &:hover {
          color: black;
          transition: var(--transition);
        }
      }
    }
    .sidebar.show {
      /* transform: translateX(0); */
      right: 0;
      transition: all 0.5s ease-in-out;
    }
  }

  /* ANIMATION */

  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
    transition: var(--transition);
  }

  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
    transition: var(--transition);
  }

  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
    transition: var(--transition);
  }
`

export default Hamburger
