import React from "react"
import data from "../constants/socials"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <main className="container">
        {data.map((social, index) => {
          const { text, url } = social
          return (
            <ul className="social-links" key={index}>
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
  padding-top: 10rem;
  a {
    font-size: 2rem;
  }

  .container {
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;

    .social-links a {
      transition: var(--transition);
      padding-bottom: 0.5rem;
      color: var(--clr-black);
    }

    .social-links a:hover,
    a:focus {
      box-shadow: var(--box-shadow);
      color: steelblue;
    }
  }

  .made-gatsby {
    display: flex;
    justify-content: center;
    padding: 3rem;

    .gatsby {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 768px) {
    a {
      font-size: 2.5rem;
    }
    .container {
      width: 60%;
    }
  }

  @media (min-width: 1170px) {
    a {
      font-size: 3rem;
    }
    .container {
      width: 45%;
    }
  }
`

export default Footer
