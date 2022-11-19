import React from "react"
import styled from "styled-components"
import { FiMail } from "react-icons/fi"
import { BsTelephone } from "react-icons/bs"
import { useInView } from "react-intersection-observer"

const FooterNew = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <Wrapper>
      <div className="container">
        <div className="contact-container">
          <div
            className={inView ? "emailphone appear" : "emailphone"}
            ref={ref}
          >
            <div className="icon-bg">
              <FiMail className="icon" />
            </div>
            <a href="mailto:mytokyowebdev@ernieryan.dev">
              mytokyowebdev@ernieryan.dev
            </a>
          </div>
          <div
            className={inView ? "emailphone appear" : "emailphone"}
            ref={ref}
          >
            <div className="icon-bg">
              <BsTelephone className="icon" />
            </div>
            <a href="tel:08075750507">+81 80-7575-0507</a>
          </div>
        </div>
        <div className={inView ? "sublinks appear" : "sublinks"} ref={ref}>
          <div className="pages">
            <h4>PAGES</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#Services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/#About">About Me</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <h4>SOCIAL MEDIA</h4>
            <ul>
              {/* <li>
                <a href="https://twitter.com/">Twitter</a>
              </li> */}
              {/* <li>
                <a href="https://www.linkedin.com/feed/">LinkedIn</a>
              </li> */}
              <li>
                <a href="https://github.com/ryanesmores07">Github</a>
              </li>
              {/* <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  overflow: hidden;

  background-color: black;
  color: white;
  padding: 8rem 2rem;
  .container {
    position: relative;
    &::before {
      content: "";
      height: 1px;
      width: 100%;
      background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #eb9fed);
      opacity: 0.5;
      transform: scaleX(2);
      top: -12rem;
      left: 0;
      position: absolute;
    }
    .contact-container {
      margin-bottom: 7rem;
      position: relative;
      &::before {
        content: "";
        top: -7.5rem;
        opacity: 0.3;
        width: 100%;
        height: 1px;
        background-color: white;
        position: absolute;
      }
      .emailphone {
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 3rem;
        transform: scaleY(0);

        a {
          font-size: 1.6rem;
          font-weight: 400;
          border-radius: 50rem;
          color: white;
          padding-left: 4.5rem;
        }
        .icon-bg {
          background: linear-gradient(
            to right,
            #bd10c3,
            #cd1590,
            #d2177e,
            #eb9fed
          );
          /* border-radius: 50%; */
          padding: 1rem;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          position: absolute;
          left: 0;
          .icon {
            color: white;
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
    .sublinks {
      display: flex;
      transform: scaleY(0);

      h4 {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        letter-spacing: 1px;
      }
      .pages,
      .social-media {
        width: 50%;
        ul li {
          margin-bottom: 1rem;
        }
        a {
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 8rem 4rem;
    .container {
      .contact-container {
        .emailphone {
          a {
            font-size: 2.5rem;
          }
        }
      }
    }
  }

  @media (min-width: 1164px) {
    padding: 12rem 5rem;
    .container {
      max-width: 120rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      gap: 10rem;
      .contact-container {
        width: 40%;
        &::before {
          display: none;
        }
        .emailphone {
          a {
          }
        }
      }
      .sublinks {
        width: 30%;
        h4 {
          font-size: 2rem;
        }
        .pages,
        .social-media {
          a {
            font-size: 2rem;
          }
        }
      }
    }
  }
`

export default FooterNew
