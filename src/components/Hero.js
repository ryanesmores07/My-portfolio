import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <Wrapper>
      <main className="container">
        <h2>👋 Hey, I'm Ryan Esmores</h2>
        <h1 className="header">front-end</h1>
        <h1 className="web-dev">web developer</h1>

        <h2>
          I love making websites and expressing my self through design & code
        </h2>
        <h2 className="introduction">
          I am a self-taught junior front-end developer based in Tokyo, Japan.
        </h2>
        <Link>
          <h2 style={{ textDecoration: "underline", color: "steelblue" }}>
            Read more about me here
          </h2>
        </Link>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;

  .container {
    padding: 15vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;

    h1 {
      /* margin-bottom: 4rem; */
    }

    h2 {
      font-weight: 200;
      margin-bottom: 2rem;
    }

    .header,
    .web-dev {
      font-size: 9rem;
      line-height: 8rem;
      font-weight: 700;
      letter-spacing: -3px;
      color: var(--clr-white);
      -webkit-text-stroke: 1.2px black;
    }

    .web-dev {
      font-weight: 200;
      color: var(--clr-black);
      margin-bottom: 4rem;
    }

    .introduction {
      color: var(--clr-grey-5);
    }
  }
`

export default Hero
