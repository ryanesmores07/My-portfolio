import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import moduleName from '../assets/images/About-images/'

const About = () => {
  return (
    <Wrapper>
      <div className="text-container" id="about">
        <h2 className="name">ERNIE RYAN</h2>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view
        </p>
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards.
        </p>
      </div>
      <div className="image-section">
        <StaticImage
          className="photo photo-1"
          src="../assets/images/About-images/img4.jpg"
          alt="my-photo"
        />
        <StaticImage
          className="photo photo-2"
          src="../assets/images/About-images/img2.jpg"
          alt="my-photo"
        />
        <StaticImage
          className="photo photo-3"
          src="../assets/images/About-images/img3.jpg"
          alt="my-photo"
        />
        <StaticImage
          className="photo photo-4"
          src="../assets/images/About-images/img1.JPG"
          alt="my-photo"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 8rem 2rem;
  /* background-color: var(--clr-grey-9); */
  .text-container {
    margin-bottom: 15rem;
    .name {
      font-size: 7rem;
      line-height: 1;
      font-weight: 500;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.8rem;
      line-height: 1.5;
      color: black;
    }
  }

  .image-section {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      opacity: 0.3;
      top: -10rem;
      background-color: black;
    }
    background-color: inherit;
    margin-top: 10rem;
    isolation: isolate;
    .photo {
      border: 3px solid #fff;
      height: 45rem;
    }
    .photo-1 {
      transform: rotate(-15deg);
      z-index: -3;
    }
    .photo-2 {
      transform: rotate(15deg);
      z-index: -2;
    }
    .photo-3 {
      transform: rotate(-15deg);
      z-index: -1;
    }
    .photo-4 {
      transform: rotate(15deg);
      z-index: 1;
    }
  }
`

export default About
