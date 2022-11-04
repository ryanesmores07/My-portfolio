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
          Front-end / eCommerce developer based in Tokyo, Japan. I love building
          and designing responsive websites.
        </p>
        <p>
          What is your challenge? I can help you with your eCommerce website and
          solve the problems that hinders the growth of your business!
        </p>
        <div className="blockquote-container">
          <div className="blockquote">
            <q>You can do anything you set your mind to.</q>
            <span> - Eminem</span>
          </div>
        </div>
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
  overflow: hidden;
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
    .blockquote-container {
      display: flex;
      margin-left: 3rem;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
      justify-content: flex-start;
      /* align-items: center; */
      width: 70%;
      border-left: 0.5rem solid steelblue;
      padding-left: 1rem;

      q {
        font-size: 2rem;
        line-height: 0.8;
      }

      span {
        font-size: 2rem;
      }
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
      width: 100%;
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

  @media (min-width: 1164px) {
    padding: 12rem 5rem 17rem;
    .text-container {
      gap: 3rem;
      display: flex;
      .name {
        margin-right: 5rem;
      }
    }
    .image-section {
      padding: 0 4rem;
      display: flex;
      .photo {
        height: 38rem;
      }
      .photo-1 {
        transform: rotate(-10deg);
        z-index: -3;
      }
      .photo-2 {
        transform: rotate(15deg);
        z-index: -2;
      }
      .photo-3 {
        transform: rotate(-1deg);
        z-index: -3;
      }
      .photo-4 {
        transform: rotate(-15deg);
        z-index: -4;
      }
    }
  }
`

export default About
