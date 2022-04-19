import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"

const Burger = () => {
  const [status, setStatus] = useState("open")
  const { links, hideSidebar, isSidebarOpen } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <nav>
        <div
          className="container"
          role="button"
          onClick={() => {
            setStatus(isSidebarOpen === true ? "open" : "close")
          }}
        >
          <i className={status}></i>
          <i className={status}></i>
          <i className={status}></i>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border: 3px solid var(--clr-black);
  }
  .container {
    display: flex;
    flex-direction: column;
  }

  i {
    width: 5rem;
    height: 6px;
    margin: 4px;
    background: var(--clr-black);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .open:nth-child(1) {
    transform: rotate(45deg) translate(50px, -35px);
    /* transform: rotate(45deg) translateY(16px); */
    transition: var(--transition);
  }
  .open:nth-child(2) {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
    transition: var(--transition);
  }
  .open:nth-child(3) {
    transform: rotate(-45deg) translate(50px, 25px);
    /* transform: rotate(-45deg) translateY(-16px); */
    transition: var(--transition);
  }

  .close:nth-child(1) {
  }
  .close:nth-child(2) {
  }
  .close:nth-child(3) {
  }
`

export default Burger
