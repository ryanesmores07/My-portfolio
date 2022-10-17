import React from "react"
import styled from "styled-components"
import socials from "../constants/socials"
import { CgArrowsExpandUpRight } from "react-icons/cg"

const Contact = () => {
  return (
    <Wrapper>
      <section className="container">
        {/* <h2>Contact</h2> */}
        <div className="title">
          <h1 className="header">get in touch</h1>
        </div>
        <div className="content">
          <p className="info">
            What is your challenge? I can help you with your website front-end
            development needs and make it fully responsive for web and mobile!
          </p>
        </div>
        <div className="socials">
          <a href="mailto:ryanesmores07@gmail.com">
            <h3>ryanesmores07@gmail.com</h3>
          </a>
          <a href="tel:08075750507">
            <h3 style={{ marginBottom: "6rem" }}>+81 80-7575-0507</h3>
          </a>
          {socials.map((social, index) => {
            return (
              <div className="social-container">
                <a href={social.url} className="flex-container">
                  <div className="social-text">{social.text}</div>
                  <CgArrowsExpandUpRight className="arrow-icon" />
                </a>

                <div className="line"></div>
              </div>
            )
          })}
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;

  .container {
    margin: 0 auto;
    max-width: 80%;
    /* padding: 0rem rem; */

    .header {
      animation: top-to-bottom calc(var(--transition-duration) + 400ms) ease-out
        forwards;
    }

    .info {
      animation: right-to-left calc(var(--transition-duration) + 400ms) ease-out
        forwards;
    }

    h1 {
      font-size: 5.5rem;
      font-weight: 300;
      letter-spacing: -2px;
      margin-bottom: 10rem;
    }

    h2 {
      font-weight: 200;
      font-size: 1.7rem;
    }

    a,
    h3 {
      font-weight: 400;
      font-size: 2rem;
      color: var(--clr-black);
      margin-bottom: 2rem;
      font-family: var(--ff-primary);
    }

    a {
      /* font-style: var(--ff-primary); */
      font-weight: 200;
    }

    p {
      font-size: 2rem;
      margin-bottom: 10rem;
    }

    .social-container {
      .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;

        .social-text {
          margin: 0 1rem;
        }

        .arrow-icon {
          font-size: 2rem;
          margin-right: 1rem;
        }
      }

      .flex-container:hover,
      .flex-container:focus {
        .social-text {
          transform: translateX(0.3rem);
          transition: all 0.1s linear;
          color: steelblue;
        }
      }

      .line {
        height: 0.1rem;
        width: 100%;
        background: var(--clr-black);
        opacity: 0.2;
        margin: 0.7rem 0;
      }
    }

    @media (min-width: 450px) {
      h1 {
        font-size: 7rem;
      }
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 13rem;
      }

      p {
        max-width: 46ch;
      }
    }

    @media (min-width: 1170px) {
      max-width: 95%;
      h1 {
        font-size: 17rem;
      }

      p {
        margin: 0 auto;
        /* width: 80%; */
        max-width: 75ch;
        padding: 0rem 8rem;
        margin-bottom: 10rem;
        font-size: 2.5rem;
      }

      .socials {
        h3 {
          font-size: 4rem;
        }
      }

      .social-container {
        a {
          font-size: 2.5rem;
        }
      }
    }
  }
`

export default Contact
