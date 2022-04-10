import React from "react"
import data from "../constants/socials"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Wrapper>
      <main className="container">
        {data.map((social, index) => {
          const { id, text, url, icon } = social
          return (
            <ul className="social-links">
              <li>
                <a href={url}>{text}</a>
              </li>
            </ul>
          )
        })}
      </main>
      <div className="made-gatsby">
        <a href="https://www.gatsbyjs.com/">
          <h3 className="gatsby">Gatsby ❤️</h3>
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  a {
    font-size: 2rem;
  }

  .container {
    margin: 0 auto;
    width: 70%;
    display: flex;
    justify-content: space-between;

    .social-links {
      &:hover,
      &:focus {
        border-bottom: 1px solid #000;
      }
    }
  }

  .made-gatsby {
    display: flex;
    justify-content: center;
    padding: 3rem;

    .gatsby {
      font-size: 1.8rem;
      /* text-decoration: underline; */
    }
  }
`

export default Footer
