import React, { useContext } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import * as style from "./Sidebar.module.css"
import { Hamburger } from "../components/"

const Sidebar = () => {
  const { links, hideSidebar, isSidebarOpen } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className={`${style.sidebar}`}>
          <ul onClick={hideSidebar}>
            {links.map((link, index) => {
              return (
                <Link to={link.url} key={index}>
                  <li className={style.li}>{link.text}</li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside``

export default Sidebar
