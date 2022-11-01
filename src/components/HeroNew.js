import React from "react"
import { HiOutlineArrowRight } from "react-icons/hi"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const HeroNew = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container">
          <h1 className="text-gradient">eCommerce Web developer</h1>
          <h1>crafting products</h1>
          <h1>that people love</h1>
          <p>
            I'm Ernie Ryan— a web developer who works with startups looking to
            push creative boundaries and create unique user experiences.
          </p>

          <a className="btn" href="#">
            Book a FREE Call
            <span>
              <HiOutlineArrowRight className="arrow" />
            </span>
          </a>
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
        font-size: 6rem;
        font-weight: 400;
        line-height: 1.2;
      }

      p {
        color: var(--clr-grey-10);
        margin: 3rem 0 5rem;
        font-size: 1.6rem;
      }

      .btn {
        background: linear-gradient(#bd10c3, #cd1590, #d2177e);
        font-size: 1.8rem;
        color: white;
        padding: 1.5rem 3.5rem;
        padding-right: 0;
        border-radius: 50rem;
        letter-spacing: 1px;
        cursor: pointer;

        span {
          margin: 3px 2px 2px 3rem;
          padding: inherit;
          background-color: white;
          border-radius: 50%;

          .arrow {
            width: 2.4rem;
            height: 2.4rem;
            font-size: 1rem;

            color: black;
            transform: translateX(-1.7rem) translateY(4px);
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
`

export default HeroNew
