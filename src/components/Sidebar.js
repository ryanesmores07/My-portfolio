import React, { useContext } from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import { Hamburger, Burger } from "../components/"

const Sidebar = () => {
  const { links, hideSidebar } = useContext(GatsbyContext)
  console.log(links)

  return (
    <Wrapper>
      <div className="container">
        {/* <div className="burger" role="button" onClick={hideSidebar}>
          <MdClose className="icon" />
          <Hamburger />
          <Burger />
        </div> */}
        <div className="links">
          {links.map((link, index) => {
            const { url, text } = link

            return (
              <Link to={url} key={index} onClick={hideSidebar}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  /* z-index: 20; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* @media (min-width: 791px) {
    display: none;
  } */

  .container {
    background: var(--clr-white);
    width: 80vw;
    height: 80vh;
    border-radius: var(--radius);
    position: relative;
    padding: 4rem 2rem 2rem 2rem;
    .burger {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: transparent;
      font-size: 4rem;
      cursor: pointer;
      color: var(--clr-grey-5);
    }
    .links {
      display: grid;
      margin-left: 3rem;
      gap: 3rem 2rem;
      @media (min-width: 768px) {
        /* grid-template-columns: 1fr 1fr; */
      }
      a {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.75rem;
        grid-gap: 1.5rem;

        align-items: center;
        color: #0a2540;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 3rem;
        .icon {
          color: #88add2;
          font-size: 4rem;
        }
        &:hover {
          color: #88add2;
          .icon {
            color: #0a2540;
          }
        }
      }
    }
  }
`

export default Sidebar
