import React, { useContext } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { Sidebar } from "../components/"

const Hamburger = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div
        className={`${isSidebarOpen ? "menu-btn open" : "menu-btn"}`}
        role="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className="menu-btn__burger"></div>
      </div>

      {isSidebarOpen && <Sidebar />}
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

      height: 100%;
      padding: 7rem 10rem 7rem 7rem;

      background-color: rgba(255, 255, 255, 0.9);
      transition: all 0.5s ease-in-out;

      li {
        color: var(--clr-black);
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
