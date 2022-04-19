import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="about-me">
          <h2>About me</h2>
        </div>
        <div className="my-photo">
          <StaticImage
            className="photo"
            src="../assets/images/ryan.jpg"
            alt="my-photo"
          />
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .container {
    padding: 3rem 5rem;

    .about-me {
      margin-bottom: 3rem;
    }

    .photo {
    }
  }
`

export default About
