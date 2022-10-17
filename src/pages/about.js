import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="title">{/* <h2>About me</h2> */}</div>
        <div className="my-photo">
          <StaticImage
            className="photo"
            src="../assets/images/ryan.jpg"
            alt="my-photo"
          />
        </div>
        <div className="content">
          <h2>About me</h2>
          <h3>
            <strong>Hi, I'm Ryan Esmores</strong>, a Filipino self-taught
            front-end web developer based in Tokyo, Japan.
          </h3>
          <p>
            Enthusiastic front-end web developer with a "can-do" attitude. I
            love learning new things whether its a new skill, or a hobby, and I
            always strive to be a better version of myself.
          </p>

          <div className="blockquote-container">
            <div className="blockquote">
              <q>You can do anything you set your mind to.</q>
              <span> - Eminem</span>
            </div>
          </div>
          <p>
            I'm always trying to grow and learn something new. I lose track of
            time when studying languages or simply reading a good book.
          </p>
          <p>
            I may lack the experience of working on a real world project in the
            tech world, but I can guarantee that I pick up quickly, and my
            enthusiasism, and eagerness to learn will make up for my
            shortcomings and I will assure you that I will be one of the great
            assets of the company in the future.
          </p>
          <a
            className="CV"
            href="https://drive.google.com/file/d/1kvZM7CeuKyiVVQQaFmlSj-ME8wwEBqPd/view?usp=sharing"
          >
            Download my CV
          </a>

          <h2 style={{ fontWeight: 700, marginTop: "7rem" }}>
            My Current Stacks:
          </h2>
          <div className="tech-container">
            <ul className="tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>GatsbyJS</li>
              <li>NextJS</li>
              <li>Styled-Components</li>
              <li>Github</li>
              <li>GraphQL</li>
              <li>REST</li>
              <li>AXIOS</li>
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;

  @keyframes fade-in {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .container {
    max-width: 80%;
    /* padding: 3rem; */
    margin: 0 auto;

    .title {
      margin: 0rem 0rem 3rem;
      h2 {
        font-weight: 200;
        font-size: 1.7rem;
      }
    }

    .my-photo {
      padding: 1rem;
      margin-bottom: 5rem;
      .photo {
        object-fit: contain;
        animation: left-to-right calc(var(--transition-duration) + 400ms)
          ease-out forwards;
      }
    }

    .content {
      padding: 0 10rem;
      /* background-color: red; */
      h2 {
        align-self: flex-start;
        transform: translateX(-5rem);
        font-weight: 300;
        font-family: var(--ff-primary);
        font-size: 2.5rem;
        margin-bottom: 3rem;
      }

      h3 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        line-height: 1.5;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        /* max-width: 80%; */
      }

      .CV {
        margin-bottom: 3rem;
        font-weight: 400;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: purple;
          height: 2px;
        }
      }
    }

    .blockquote-container {
      display: flex;
      margin-left: 3rem;
      margin-bottom: 2.5rem;
      justify-content: flex-start;
      /* align-items: center; */
      width: 70%;
      border-left: 0.5rem solid steelblue;
      padding-left: 1rem;

      q {
        font-size: 2rem;
        line-height: 1;
      }

      span {
        font-size: 2.5rem;
      }
    }

    .tech-container {
      display: flex;
      .tech-list {
        /* padding: 0 3rem; */
        /* width: 70%; */

        li {
          display: inline-block;
          font-size: 1.5rem;
          margin: 0 0 0.5rem;
          margin-right: 1rem;
          padding: 0rem 0.5rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          border-radius: 1px;

          background-color: var(--clr-grey-8);
        }
      }
    }
  }

  @media (min-width: 450px) {
    .container {
      .my-photo {
        padding: 1rem 6rem;
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      .my-photo {
        padding: 1rem 18rem;
      }
    }
  }

  @media (min-width: 1170px) {
    .container {
      .my-photo {
        padding: 1rem 30%;
      }

      .content {
        h2 {
          font-size: 3.2rem;
          font-weight: 500;
        }

        h3 {
          font-size: 2.5rem;
          max-width: 55ch;
        }

        p {
          font-size: 2rem;
          margin-bottom: 2.5rem;
        }

        .blockquote-container {
          margin-bottom: 4rem;
          q {
            font-size: 2.5rem;
          }
        }
      }

      .tech-container {
        .tech-list {
          li {
            font-size: 1.5rem;
            padding: 0 1rem;
            margin-right: 2rem;
            border-radius: 5rem;
          }
        }
      }
    }
  }
`

export default About
