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
          <h1 className="text-gradient appear">eCommerce Developer</h1>
          <h1 className="appear-delay-1">crafting products</h1>
          <h1 className="appear-delay-2">that people love</h1>
          <p className="appear-delay-3">
            I'm Ernie Ryan— a web developer who works with startups looking to
            push creative boundaries and create unique user experiences.
          </p>

          <div className="btn-container appear-delay-4">
            <Link className="btn" href="/contact">
              Book a FREE Call
            </Link>
            <div className="icon-bg">
              <HiOutlineArrowRight className="arrow" />
            </div>
          </div>
        </div>

        <div className="image-container appear">
          <StaticImage
            className="photo"
            src="../assets/images/ryan2.jpg"
            alt="my-photo"
            layout="constrained"
            loading="eager"
            width={800}
            aspectRatio={4 / 5.5}
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
  display: flex;
  justify-content: center;
  overflow: hidden;

  .text-gradient {
    background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .appear {
    animation: appear 800ms forwards ease-in-out;
  }
  .appear-delay-1 {
    animation: appear 800ms forwards ease-in-out;
    animation-delay: 200ms, 1000ms;
  }
  .appear-delay-2 {
    animation: appear 800ms forwards ease-in-out;
    animation-delay: 400ms, 1000ms;
  }
  .appear-delay-3 {
    animation: appear 800ms forwards ease-in-out;
    animation-delay: 600ms, 1000ms;
  }
  .appear-delay-4 {
    animation: appear 800ms forwards ease-in-out;
    animation-delay: 800ms, 1000ms;
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
        transform: scaleY(0);
      }

      p {
        color: var(--clr-grey-9);
        margin: 3rem 0 5rem;
        font-size: 1.6rem;
        font-family: var(--ff-satoshi);
        font-weight: 400;
        max-width: 95%;
        transform: scaleY(0);
      }

      .btn-container {
        display: flex;
        align-items: center;
        position: absolute;
        transform: scaleY(0);

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
      padding: 1rem;
      transform: scaleY(0);

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(3deg, #fff 10%, #cd1590 70%, #d2177e 40%);
        filter: blur(25px);
        opacity: 0.5;
        animation: pulse 2000ms linear alternate-reverse infinite;
      }
      .photo {
      }

      @keyframes pulse {
        from {
          opacity: 0.5;
        }
        to {
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 8rem 4rem 15rem;

    .container {
      .text-container {
        margin-bottom: 7rem;
        width: 70%;
        h1 {
          font-size: 6rem;
          font-weight: 500;
          line-height: 1.1;
        }
        p {
          max-width: 65%;
        }
      }
      .image-container {
        text-align: center;
        max-width: 70%;

        .photo {
        }
      }
    }
  }

  @media (min-width: 1164px) {
    padding-bottom: 20rem;
    .container {
      width: 100%;
      flex-direction: row;
      /* justify-content: center; */
      gap: 0;
      .text-container {
        flex: 1 1 60%;

        /* width: 70%; */
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
            .arrow {
            }
          }
        }
      }
      .image-container {
        /* width: 40%; */
        flex: 1 1 40%;

        &::before {
        }

        .photo {
          /* height: 100%; */
        }
      }
    }
  }

  @media (min-width: 1440px) {
    padding-inline: 10rem;
    .container {
      max-width: 120rem;
      gap: 5rem;
      .text-container {
        h1 {
        }
        p {
          max-width: 70%;
        }
        .btn-container {
          a {
          }
          .icon-bg {
            .arrow {
            }
          }
        }
      }
      .image-container {
        &::before {
        }

        .photo {
        }
      }
    }
  }
`

export default HeroNew
