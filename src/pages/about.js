import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="title">
          <h2>About me</h2>
        </div>
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
            <strong>Hi, I'm Ryan Esmores</strong>, a self-taught front-end web
            developer from the Philippines.
          </h3>
          <p>
            Enthusiastic front-end web developer with a "can-do" attitude. I
            love learning new things whether its a new skill, or a hobby, and I
            always strive to be a better version of myself.
          </p>
          <div className="blockquote-container">
            <div className="blockquote">
              <q>You can do anything you set your mind to, man.</q>
              <span> - Eminem</span>
            </div>
          </div>
          <p>
            I may lack the experience of working on a real world project in the
            tech world, but I can guarantee that I pick up quickly, and my
            enthusiasism, and eagerness to learn will make up for it.
          </p>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;

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
        /* max-width: 30%; */
      }
    }

    .content {
      h2 {
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
    }
  }
`

export default About
