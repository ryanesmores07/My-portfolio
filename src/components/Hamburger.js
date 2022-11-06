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
    background: var(--clr-white);
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
      background: var(--clr-white);

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

  @media (min-width: 1164px) {
    display: none;
  }
`

export default Hamburger
