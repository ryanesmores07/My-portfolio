import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"

const Hamburger = () => {
  const { links, hideSidebar, isSidebarOpen } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div
        role="button"
        className={isSidebarOpen === true ? "menu-btn-animate" : "menu-btn"}
      >
        <div className="menu-btn__burger"></div>
      </div>
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
  }

  .menu-btn-animate {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    /* border: 3px solid var(--clr-black); */
  }

  .menu-btn__burger {
    width: 5rem;
    height: 6px;
    background: var(--clr-black);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 5rem;
      height: 6px;
      background: var(--clr-black);
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: all 0.5s ease-in-out;
    }

    &::before {
      transform: translateY(-16px);
    }
    &::after {
      transform: translateY(16px);
    }
  }

  /* ANIMATION */

  .menu-btn .menu-btn__burger {
    /* transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
    transition: var(--transition); */
  }

  .menu-btn .menu-btn__burger::before {
    /* transform: rotate(45deg) translate(35px, -35px);
    transition: var(--transition); */
  }

  .menu-btn .menu-btn__burger::after {
    /* transform: rotate(-45deg) translate(35px, 35px);
    transition: var(--transition); */
  }

  .menu-btn-animate .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
    transition: var(--transition);
  }

  .menu-btn-animate .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
    transition: var(--transition);
  }

  .menu-btn-animate .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
    transition: var(--transition);
  }
`

export default Hamburger
