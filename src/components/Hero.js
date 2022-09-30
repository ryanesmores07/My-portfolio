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
          I am a front-end web developer based in Tokyo, Japan.
        </h2>
        <Link to="/about">
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
  --transition-duration: 100ms;
  /* min-height: 100vh; */

  .container {
    padding: 5vh 15vw;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
    }

    h2 {
      font-weight: 200;
    }

    .name {
      transform: translateY(-1000%);
      font-weight: 300;
      animation: top-to-bottom var(--transition-duration) ease-out forwards
        200ms;
    }

    .header {
      transform: translateX(-1000%);
      animation: left-to-right calc(var(--transition-duration) + 400ms)
        ease-in-out forwards;
    }

    .web-dev {
      transform: translateX(1000%);
      animation: right-to-left calc(var(--transition-duration) + 400ms)
        ease-in-out forwards;
    }

    .header,
    .web-dev {
      font-size: 7rem;
      /* font-size: clamp(9rem, 14vw, 19vw); */
      line-height: 0.9;
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
      padding: 15vh 8vw;

      .name {
        margin-bottom: 3rem;
      }

      .header,
      .web-dev {
        font-size: 10rem;
        margin-bottom: 2rem;
      }

      .web-dev {
        /* line-height: .; */
        margin-bottom: 5rem;
      }

      .introduction-1 {
        max-width: 40ch;
        align-self: center;
        margin-bottom: 2rem;
      }

      .introduction-2 {
        margin-bottom: 3rem;
      }
    }
  }

  @media (min-width: 768px) {
    /* min-height: 100vh; */
    .container {
      padding: 10rem 3rem;
      h2 {
        font-size: 2.5rem;
      }

      .name {
        font-size: 2.5rem;
      }
      .header,
      .web-dev {
        font-size: 14rem;
        line-height: 0.8;
      }

      .web-dev {
        margin-bottom: 8rem;
      }

      .introduction-1 {
        font-size: 3rem;
        max-width: 31ch;
      }

      .introduction-2 {
      }

      .read-more {
      }
    }
  }

  @media (min-width: 1170px) {
    .container {
      /* padding: 10rem 3rem; */

      h2 {
      }

      .name {
        margin-bottom: 1rem;
      }
      .header,
      .web-dev {
        line-height: 0.8;
        font-size: 20.5rem;
      }

      .web-dev {
      }

      .introduction-1 {
        line-height: 1.5;
        margin-bottom: 5rem;
      }

      .introduction-2 {
        margin-bottom: 5rem;
      }

      .read-more {
      }
    }
  }

  @keyframes top-to-bottom {
    from {
      transform: translateY(-1000%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes left-to-right {
    from {
      transform: translateX(-1000%);
    }
    90% {
      transform: translateX(10%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes right-to-left {
    from {
      transform: translateX(1000%);
    }
    90% {
      transform: translateX(-10%);
    }
    to {
      transform: translateX(0);
    }
  }
`

export default Hero
