import React from "react"
import styled from "styled-components"
import { HiOutlineArrowRight } from "react-icons/hi"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <Wrapper>
      <div className="text-container" id="contact">
        <h1>Have projects in mind?</h1>
        <h1>
          Let's work <span className="text-gradient">together</span>
        </h1>
        <p>
          I'm Ernie Ryan— a developer who works with startups looking to push
          creative boundaries Working with startups
        </p>
        <div className="button-container">
          <Link to="/">Book FREE Call</Link>
          <div className="icon-bg">
            <HiOutlineArrowRight className="arrow" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: black;
  color: white;
  padding: 8rem 2rem;
  .text-gradient {
    background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #eb9fed);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-container {
    h1 {
      font-size: 6rem;
      font-weight: 500;
      line-height: 1.1;
      margin-bottom: 3rem;
    }
    p {
      color: var(--clr-grey-9);
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }
    .button-container {
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
        /* border-radius: 50%; */
        padding: 1rem;
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        position: absolute;
        right: 0.3rem;
        .arrow {
          color: black;
          width: 2rem;
          height: 2rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 8rem 4rem 15rem;

    .text-container {
      h1 {
        font-size: 6rem;
        font-weight: 500;
        width: 80%;
        margin-bottom: 0;
      }
      p {
        width: 70%;
        margin-top: 3rem;
        margin-bottom: 4rem;
      }
      .button-container {
      }
    }
  }

  @media (min-width: 1164px) {
    text-align: center;
    .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        line-height: 0.8;
        font-weight: 500;
      }
      p {
        max-width: 45%;
        text-align: center;
      }
      .button-container {
        position: relative;
        .icon-bg {
          right: 0.3rem;
        }
      }
    }
  }
`

export default Contact
