import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import Sidebar from "./Sidebar"

const Hamburger = () => {
  const { links, hideSidebar, showSidebar, isSidebarOpen } =
    useContext(GatsbyContext)
  const [animate, setAnimate] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  return (
    <Wrapper>
      <div
        className={`menu-btn ${animate ? "open" : ""}`}
        role="button"
        onClick={() => setAnimate(!animate)}
        // onClick={showSidebar}
        // className={animate === true ? "menu-btn-animate" : "menu-btn"}
      >
        <div className="menu-btn__burger"></div>
      </div>
      <aside className="sidebar-container">
        <div className={`${!animate ? "sidebar" : "sidebar  show"}`}>
          {links.map((link, index) => {
            return (
              <ul onClick={() => setAnimate(false)}>
                <Link to={link.url} className="yo">
                  <li>{link.text}</li>
                </Link>
              </ul>
            )
          })}
        </div>
      </aside>
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
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 4rem;
      height: 3px;
      background: var(--clr-black);
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
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

  .sidebar-container {
    .sidebar {
      position: fixed;
      top: 0rem;
      right: -100rem;

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
`

export default Hamburger

// {
//   animate && (
//     <aside className="sidebar-container">
//       <div className={`${!animate ? "sidebar" : "sidebar  show"}`}>
//         {links.map((link, index) => {
//           return (
//             <ul onClick={() => setAnimate(false)}>
//               <Link to={link.url} className="yo">
//                 <li>{link.text}</li>
//               </Link>
//             </ul>
//           )
//         })}
//       </div>
//     </aside>
//     // <Sidebar />
//   )
// }
