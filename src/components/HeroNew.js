import React from "react"
import { HiOutlineArrowRight } from "react-icons/hi"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const HeroNew = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container">
          <h1 className="text-gradient">eCommerce Developer</h1>
          <h1>crafting products</h1>
          <h1>that people love</h1>
          <p>
            I'm Ernie Ryan— a web developer who works with startups looking to
            push creative boundaries and create unique user experiences.
          </p>

          <div className="btn-container">
            <Link className="btn" href="#">
              Book a FREE Call
            </Link>
            <div className="icon-bg">
              <HiOutlineArrowRight className="arrow" />
            </div>
          </div>
        </div>
        <div className="image-container">
          <StaticImage
            className="photo"
            src="../assets/images/ryan.jpg"
            alt="my-photo"
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: black;
  color: white;
  padding: 5rem 2rem;
  .text-gradient {
    background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .text-container {
      margin-bottom: 3rem;
      h1 {
        font-size: 5rem;
        font-weight: 700;
        line-height: 1.2;
      }

      p {
        color: var(--clr-grey-9);
        margin: 3rem 0 5rem;
        font-size: 1.6rem;
        font-family: var(--ff-satoshi);
        font-weight: 400;
        max-width: 95%;
      }

      .btn-container {
        display: flex;
        align-items: center;
        position: absolute;

        a {
          background: linear-gradient(
            to right,
            #bd10c3,
            #cd1590,
            #d2177e,
            #eb9fed
          );
          color: white;
          border-radius: 50rem;
          padding: 1.2rem 7rem 1.2rem 4rem;
          font-size: 1.8rem;
          font-weight: 400;
        }
        .icon-bg {
          background-color: white;
          padding: 1rem;
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 50%;
          position: absolute;
          right: 0.3rem;
          .arrow {
            width: 2rem;
            height: 2rem;
            color: black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
    .image-container {
      text-align: center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(3deg, #fff 10%, #cd1590 70%, #d2177e 40%);
        filter: blur(25px);
        opacity: 0.8;
      }

      .photo {
        width: 90%;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 8rem 4rem 15rem;

    .container {
      .text-container {
        margin-bottom: 7rem;
        h1 {
          font-size: 6rem;
          width: 70%;
          font-weight: 500;
          line-height: 1.1;
        }
        p {
          max-width: 65%;
        }
      }
      .image-container {
        text-align: center;
        width: 60%;

        .photo {
          /* width: 70%; */
        }
      }
    }
  }

  @media (min-width: 1164px) {
    padding: 8rem 5rem 20rem;

    .container {
      flex-direction: row;
      .text-container {
        width: 60%;
        h1 {
          font-size: 7rem;
          font-weight: 900;
        }
        p {
          max-width: 80%;
        }
        .btn-container {
          a {
          }
          .icon-bg {
            left: 20rem;
            .arrow {
            }
          }
        }
      }
      .image-container {
        max-width: 40%;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .photo {
          height: 100%;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 8rem 10rem 20rem;

    .container {
      flex-direction: row;
      .text-container {
        width: 60%;
        h1 {
          font-size: 6rem;
          font-weight: 900;
        }
        p {
          max-width: 70%;
        }
        .btn-container {
          a {
          }
          .icon-bg {
            left: 20rem;
            .arrow {
            }
          }
        }
      }
      .image-container {
        max-width: 40%;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .photo {
          height: 100%;
        }
      }
    }
  }
`

export default HeroNew
