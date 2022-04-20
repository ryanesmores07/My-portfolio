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
            Hi, I'm Ryan Esmores, a self-taught front-end web developer from the
            Philippines.
          </h3>
          <h3>
            Enthusiastic front-end web developer with a "can-do" attitude. I
            love learning new things whether its a new skill, or a hobby, and I
            always strive to be a better version of myself.
          </h3>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;

  .container {
    width: 80%;
    /* padding: 3rem; */
    margin: 0 auto;

    .title {
      margin: 0rem 0rem 5rem;
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
      }
    }
  }
`

export default About
