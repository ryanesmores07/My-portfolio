import React, { useContext } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"

const Sidebar = () => {
  const { links, hideSidebar, isSidebarOpen } = useContext(GatsbyContext)
  console.log(links)

  return (
    <Wrapper>
      <section className="sidebar-container">
        <div className={`${!isSidebarOpen ? "sidebar" : "sidebar show"}`}>
          <ul onClick={() => hideSidebar()}>
            {links.map((link, index) => {
              return (
                <Link to={link.url} key={index}>
                  {/* <li>{link.text}</li> */}
                  <li>{link.text}</li>
                </Link>
              )
            })}
          </ul>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
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
        /* font-size: 2rem; */
        font-size: 3.5rem;
        font-weight: 300;

        /* -webkit-text-stroke: 1.2px black; */

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

  @media (min-width: 768px) {
    .sidebar-container {
      .sidebar {
        li {
          color: var(--clr-white);
          font-size: 8rem;
          font-weight: 400;
          line-height: 1.5;
        }
      }
    }
  }
`

export default Sidebar
