import React from "react"
import data from "../constants/socials"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Wrapper>
      {data.map((social, index) => {
        const { id, text, url, icon } = social
        return (
          <main className="container">
            <ul>
              <li>
                <a href={url}>{text}</a>
              </li>
            </ul>
          </main>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;

  .container {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`

export default Footer
