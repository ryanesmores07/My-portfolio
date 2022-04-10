import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <Wrapper>
      <main className="container">
        <h2 className="name">👋 Hey, I'm Ryan Esmores</h2>
        <h1 className="header">front-end</h1>
        <h1 className="web-dev">web developer</h1>

        <h2 className="introduction-1">
          I love making websites and expressing myself through design & code
        </h2>
        <h2 className="introduction-2">
          I am a self-taught junior front-end developer based in Tokyo, Japan.
        </h2>
        <Link to="/">
          <h2
            className="read-more"
            style={{ textDecoration: "underline", color: "steelblue" }}
          >
            Read more about me here
          </h2>
        </Link>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  /* min-height: 100vh; */

  .container {
    padding: 5vh 15vw;
    display: flex;
    flex-direction: column;

    text-align: center;

    h1 {
      /* margin-bottom: 4rem; */
    }

    h2 {
      font-weight: 200;
      margin-bottom: 2rem;
    }

    .name {
      /* margin-bottom: 4rem; */

      font-weight: 300;
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

    .introduction-2 {
      color: var(--clr-grey-5);
      font-weight: 300;
    }
  }

  @media (min-width: 450px) {
    .container {
      /* padding: 15vh 8vw; */

      .name {
        margin-bottom: 4rem;
      }
      .header,
      .web-dev {
        font-size: 14vw;
        margin-bottom: 2rem;
      }

      .web-dev {
        line-height: 12rem;
        margin-bottom: 5rem;
      }

      .introduction-1 {
        max-width: 40ch;
        align-self: center;
      }

      .introduction-2 {
        margin-bottom: 3rem;
      }
    }
  }

  @media (min-width: 768px) {
    min-height: 100vh;
    .container {
      padding: 10rem 3rem;
      h2 {
        font-size: 2.5rem;
      }

      .name {
        font-size: 3.5rem;
      }
      .header,
      .web-dev {
        font-size: 19vw;
        line-height: 15rem;
      }

      .web-dev {
        margin-bottom: 8rem;
      }

      .introduction-1 {
        font-size: 3rem;
        max-width: 37ch;
      }

      .introduction-2 {
      }

      .read-more {
      }
    }
  }

  @media (min-width: 1170px) {
    .container {
      h2 {
      }

      .name {
      }
      .header,
      .web-dev {
      }

      .web-dev {
      }

      .introduction-1 {
      }

      .introduction-2 {
      }

      .read-more {
      }
    }
  }
`

export default Hero
