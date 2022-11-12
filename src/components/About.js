import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import moduleName from '../assets/images/About-images/'

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container" id="About">
          <h2 className="name">ERNIE RYAN</h2>
          <div className="paragraph-container">
            <p>
              Front-end / eCommerce developer based in Tokyo, Japan. I love
              building and designing responsive websites.
            </p>
            <p>
              What is your challenge? I can help you with your eCommerce website
              and solve the problems that hinders the growth of your business!
            </p>
          </div>

          <div className="blockquote-container">
            <div className="blockquote">
              <q>You can do anything you set your mind to.</q>
              <span> - Eminem</span>
            </div>
          </div>
        </div>
        <div className="image-section">
          <div className="section-1">
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
          </div>
          <div className="section-2">
            <StaticImage
              className="photo photo-3"
              src="../assets/images/About-images/img3.jpg"
              alt="my-photo"
            />
            <StaticImage
              className="photo photo-4"
              src="../assets/images/About-images/img5.jpg"
              alt="my-photo"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 8rem 2rem;
  overflow: hidden;
  .container {
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
      background-color: inherit;
      margin-top: 10rem;
      isolation: isolate;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        opacity: 0.3;
        top: -10rem;
        background-color: black;
      }

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
  }

  @media (min-width: 768px) {
    .container {
      padding: 12rem 4rem 12rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .name {
          margin-left: -0.5rem;
        }
        .paragraph-container {
          display: flex;
          gap: 5rem;
          /* justify-content: space-around; */
          & > * {
            width: 45%;
          }
        }
      }
      .image-section {
        width: 90%;
        display: flex;
        justify-content: center;
        .section-1 {
          .photo-1 {
            transform: rotate(-10deg);
            z-index: -3;
          }
          .photo-2 {
            transform: rotate(15deg) translateY(-7rem);
            z-index: -2;
          }
        }
        .section-2 {
          .photo-3 {
            transform: rotate(7deg);
            z-index: -3;
          }
          .photo-4 {
            transform: rotate(-15deg) translateY(-5rem);
            z-index: -1;
          }
        }
      }
    }
  }

  @media (min-width: 1164px) {
    padding: 12rem 5rem 17rem;
    .container {
      .text-container {
        gap: 3rem;
        display: flex;
        flex-direction: row;
        .name {
          margin-right: 5rem;
        }
        .paragraph-container {
        }
      }
      .image-section {
        padding: 0 4rem;
        display: flex;
        .photo {
          height: 30rem;
          width: 100%;
        }
        .section-1,
        .section-2 {
          display: flex;
          width: 100%;
        }
        .section-1 {
          .photo-1 {
            transform: rotate(-10deg);
            z-index: -3;
          }
          .photo-2 {
            transform: rotate(15deg);
            z-index: -2;
          }
        }
        .section-2 {
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
    }
  }

  @media (min-width: 1440px) {
    padding: 12rem 10rem 17rem;
    .container {
      margin: 0 auto;
      max-width: 120rem;
      .text-container {
        .name {
        }
      }
      .image-section {
        .photo {
          height: 35rem;
        }
        .section-1,
        .section-2 {
        }
        .section-1 {
          .photo-1 {
          }
          .photo-2 {
          }
        }
        .section-2 {
          .photo-3 {
          }
          .photo-4 {
          }
        }
      }
    }
  }
  /* @media (min-width: 1920px) {
    padding-inline: 35rem;
    .text-container {
      display: grid;
      justify-items: center;
      grid-template-columns: min-content 1fr;
      .name {
        margin-right: 0;
        font-size: 7rem;
      }
      .paragraph-container {
        justify-content: center;
        max-width: 80%;
        p {
          font-size: 2.4rem;
        }
      }
      .blockquote-container {
        grid-column: 2 / 3;
        q {
          font-size: 3rem;
          line-height: 0.8;
        }

        span {
          font-size: 3rem;
        }
      }
    }
    .image-section {
      .photo {
        height: 35rem;
      }
      .section-1,
      .section-2 {
      }
      .section-1 {
        .photo-1 {
        }
        .photo-2 {
        }
      }
      .section-2 {
        .photo-3 {
        }
        .photo-4 {
        }
      }
    }
  } */
`

export default About
